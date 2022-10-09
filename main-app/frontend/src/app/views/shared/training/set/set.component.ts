import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
    take,
    takeUntil,
} from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import * as SetValidators from '../../../../validators/training/set.validators';
import { convertWeightUnit } from '../../../../helpers/training/convert-weight-units.helper';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { FormType } from '../../../../models/common/form.type';
import { ModelWithoutIdType } from '../../../../models/common/raw.model';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import {
    SetCategoryType,
    SetConstituent,
    SetConstituentExistsType,
} from '../../../../models/training/shared/set.type';
import {
    ExerciseChangedType,
    SingleExercise,
} from '../../../../models/training/shared/single-exercise.model';
import { BODYWEIGHT_SET_CATEGORIES } from '../../../../constants/training/bodyweight-set-categories.const';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';
import { Preferences } from '../../../../models/common/preferences.model';

export type SetFormType = Pick<FormType<Set>, SetConstituent>;

type SetFormValue = Pick<ModelWithoutIdType<Set>, SetConstituent>;

@Component({
    selector: 'bl-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(SetsComponent), UnsubscribeService],
})
export class SetsComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private readonly _isWeightLifted$ = new BehaviorSubject<boolean>(true);
    private readonly _isReps$ = new BehaviorSubject<boolean>(true);
    private readonly _activeSetCategory$ = new BehaviorSubject<SetCategoryType>(null);

    readonly currentPreferences$ = this._preferencesStoreService.preferencesChanged$;
    readonly activeSetCategory$ = this._activeSetCategory$.asObservable().pipe(take(1));
    readonly isWeightLifted$ = this._isWeightLifted$.asObservable().pipe(take(1));
    readonly isReps$ = this._isReps$.asObservable().pipe(take(1));
    readonly isSetConstituent$ = combineLatest([this.isWeightLifted$, this.isReps$]).pipe(
        map(([weightLifted, reps]: [boolean, boolean]) => ({
            weightLifted,
            reps,
        })),
    );
    readonly exercisesState$ = this._newTrainingStoreService.trainingState$.pipe(
        take(1),
        map((trainingState: NewTraining) => trainingState.exercises),
    );
    readonly form = new FormArray<FormGroup<SetFormType>>([]);
    readonly bodyweightSetCategories = BODYWEIGHT_SET_CATEGORIES;
    private _currentWeightUnit: WeightUnit;

    onTouched: () => void;

    @Input()
    isExerciseChanged$: Observable<ExerciseChangedType>;

    @Input()
    bodyweightControl: AbstractControl<number>;

    @Input()
    exerciseControl: AbstractControl<string>;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    indexExercise = 0;

    @Input()
    isSubmitted = false;

    @Input()
    editMode = false;

    @Input()
    isLoading = false;

    @ViewChildren('weightLiftedEl')
    readonly weightLiftedElements: QueryList<IonInput>;

    @ViewChildren('repsEl')
    readonly repsElements: QueryList<IonInput>;

    constructor(
        private readonly _unsubscribeService: UnsubscribeService,
        private readonly _preferencesStoreService: PreferencesStoreService,
        private readonly _newTrainingStoreService: NewTrainingStoreService,
        private readonly _changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this._currentWeightUnit =
            this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;
        //TODO: Update set validator to match new set category feature
        /* this.form.setValidators([SetValidators.allSetsFilled()]);
        this.form.updateValueAndValidity(); */

        this.isExerciseChanged$
            .pipe(
                filter((data: ExerciseChangedType) => data.indexExercise === this.indexExercise),
                map((data: ExerciseChangedType) => {
                    const exercises = data.trainingState.exercises;
                    while (this.form.length !== 0) {
                        this.form.removeAt(0);
                    }
                    const setCategory =
                        exercises[data.indexExercise].exerciseData.primarySetCategory;
                    this._constructFormBasedOnSetCategory(setCategory);
                    this._changeDetectorRef.markForCheck();
                    return {
                        index: data.indexExercise,
                        setCategory,
                    };
                }),
                switchMap((value) =>
                    this._newTrainingStoreService.restartSets(value.index, value.setCategory),
                ),
                delay(400),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                await this._autofocusSetConstituent(setCategory, 'first');
                this._activeSetCategory$.next(setCategory);
            });

        this.bodyweightControl.valueChanges
            .pipe(distinctUntilChanged(), filter(Boolean), takeUntil(this._unsubscribeService))
            .subscribe(async (_) => {
                if (!this.bodyweightControl?.errors) {
                    this.accessFormField('reps', 0).enable();
                } else {
                    this.accessFormField('reps', 0).disable();
                }
            });

        this.currentPreferences$
            .pipe(
                filter((preferences) => this._currentWeightUnit !== preferences.weightUnit),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((preferences: Preferences) => {
                this._currentWeightUnit = preferences.weightUnit;
                this.getSets().forEach((_control, index) => {
                    const currentWeightLiftedValue = +this.accessFormField('weightLifted', index)
                        .value;
                    if (currentWeightLiftedValue) {
                        this.accessFormField('weightLifted', index).patchValue(
                            convertWeightUnit(preferences.weightUnit, currentWeightLiftedValue),
                        );
                    }
                });
            });
    }

    ngOnDestroy(): void {
        this._isWeightLifted$.complete();
        this._isReps$.complete();
        this._activeSetCategory$.complete();
    }

    writeValue(sets: Set[]): void {
        if (sets.length > 0) {
            for (const set of sets) {
                this.addSet(set);
            }
        } else {
            this.addSet();
        }
    }

    registerOnChange(fn: (value: SetFormValue[]) => void): void {
        this.form.valueChanges.pipe(takeUntil(this._unsubscribeService)).subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    async onWeightLiftedKeydown(index: number): Promise<void> {
        const weightLiftedInput = this.weightLiftedElements.find((_item, i) => i === index);
        if (index > 0 && !weightLiftedInput?.value) {
            this.deleteSet(index);
            const previousRepsElement = this.repsElements.find((_item, i) => i === index - 1);
            await previousRepsElement?.setFocus();
        }
    }

    async onRepsKeydown(index: number): Promise<void> {
        const repsInput = this.repsElements.find((_item, i) => i === index);
        if (!repsInput?.value) {
            const weightLiftedInput = this.weightLiftedElements?.find((_item, i) => i === index);
            await weightLiftedInput?.setFocus();
        }
    }

    getSets(): FormGroup<SetFormType>[] {
        return this.form.controls;
    }

    addSet(set?: Set): void {
        this.exercisesState$
            .pipe(
                map((exercises: SingleExercise[]) => {
                    const setCategory =
                        exercises[this.indexExercise].exerciseData.primarySetCategory;
                    this._constructFormBasedOnSetCategory(setCategory);
                    return setCategory;
                }),
                delay(200),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                await this._autofocusSetConstituent(setCategory, 'last');
                this._activeSetCategory$.next(setCategory);
            });
    }

    deleteSet(indexSet: number): void {
        this.isSetConstituent$
            .pipe(take(1))
            .subscribe((setConstituentsExists: SetConstituentExistsType) => {
                this.form.removeAt(indexSet);
                this._newTrainingStoreService.deleteSet(
                    this.indexExercise,
                    indexSet,
                    this._calculateTotal(
                        setConstituentsExists.weightLifted,
                        setConstituentsExists.reps,
                    ),
                );
            });
    }

    onChangeSets(indexSet: number): void {
        this.isSetConstituent$
            .pipe(
                switchMap((setConstituentExists: SetConstituentExistsType) => {
                    const weightLifted = setConstituentExists.weightLifted;
                    const reps = setConstituentExists.reps;
                    const trainingData: SetTrainingData = {
                        exerciseName: this.exerciseControl.value,
                        setNumber: indexSet + 1,
                        weightLifted:
                            weightLifted && this._isSetConstituentValid('weightLifted', indexSet)
                                ? this.accessFormField('weightLifted', indexSet).value
                                : undefined,
                        reps:
                            reps && this._isSetConstituentValid('reps', indexSet)
                                ? this.accessFormField('reps', indexSet).value
                                : undefined,
                        total: this._calculateTotal(weightLifted, reps),
                    };
                    return this._newTrainingStoreService.setsChanged(trainingData);
                }),
            )
            .subscribe();
    }

    accessFormField(formField: keyof SetFormValue, indexSet: number): AbstractControl<number> {
        return this.form.at(indexSet)?.get(formField);
    }

    private _calculateTotal(weightLifted: boolean, reps: boolean): number {
        let total = 0;
        for (const group of this.getSets()) {
            if (weightLifted && reps) {
                total += group.get('weightLifted')?.value * group.get('reps')?.value;
            }
            if (reps && !weightLifted) {
                total += this.bodyweightControl.value * group.get('reps')?.value;
            }
        }
        return total;
    }

    private _setWeightLiftedValue(weightLifted: number): number {
        if (this.editTrainingData) {
            const editTrainingWeightUnit = this.editTrainingData.weightUnit ?? DEFAULT_WEIGHT_UNIT;
            if (editTrainingWeightUnit !== this._currentWeightUnit) {
                return convertWeightUnit(this._currentWeightUnit, weightLifted);
            }
        }
        return weightLifted;
    }

    private _constructSetForm(
        setConstituent: SetConstituent,
        set: Set,
        setControls: SetFormType,
    ): SetFormType {
        setControls[setConstituent] = new FormControl(
            {
                value: this._setFormValue(setConstituent, set),
                disabled: this.exerciseControl.value ? false : true,
            },
            [
                Validators.required,
                Validators.min(1),
                Validators.max(1000),
                Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
            ],
        );
        return setControls;
    }

    private _setFormValue(setConstituent: SetConstituent, set: Set): number | null {
        if (set) {
            if (setConstituent in set) {
                if (setConstituent === 'weightLifted') {
                    return this._setWeightLiftedValue(set.weightLifted);
                } else {
                    return set.reps;
                }
            }
        }
        return null;
    }

    private _isSetConstituentValid(setConstituent: SetConstituent, indexSet: number): boolean {
        return this.accessFormField(setConstituent, indexSet)?.valid;
    }

    private _constructFormBasedOnSetCategory(setCategory: SetCategoryType): void {
        let setControls: SetFormType = Object.assign({});
        switch (setCategory) {
            case 'freeWeighted': {
                setControls = this._constructSetForm(
                    'weightLifted',
                    { setNumber: 1, weightLifted: null },
                    setControls,
                );
                setControls = this._constructSetForm(
                    'reps',
                    { setNumber: 1, reps: null },
                    setControls,
                );
                this.form.push(new FormGroup(setControls));
                break;
            }
            case 'dynamicBodyweight': {
                setControls = this._constructSetForm(
                    'reps',
                    { setNumber: 1, reps: null },
                    setControls,
                );
                this.form.push(new FormGroup(setControls));
                if (!this.bodyweightControl?.errors) {
                    this.accessFormField('reps', 0).enable();
                } else {
                    this.accessFormField('reps', 0).disable();
                }
                break;
            }
            case 'dynamicWeighted': {
                //TODO: BL-121
                break;
            }
            case 'staticBodyweight': {
                //TODO: BL-128
                break;
            }
            case 'staticWeighted': {
                //TODO: BL-123
                break;
            }
            default: {
                isNeverCheck(setCategory);
            }
        }
    }

    private async _autofocusSetConstituent(
        setCategory: SetCategoryType,
        position: 'first' | 'last',
    ): Promise<void> {
        switch (setCategory) {
            case 'freeWeighted': {
                if (position === 'first') {
                    if (this.weightLiftedElements) {
                        await this.weightLiftedElements.first.setFocus();
                    }
                } else {
                    if (this.weightLiftedElements) {
                        await this.weightLiftedElements.last?.setFocus();
                    }
                }
                break;
            }
            case 'dynamicBodyweight': {
                if (position === 'first') {
                    if (this.repsElements?.first) {
                        await this.repsElements.first.setFocus();
                    }
                } else {
                    if (this.repsElements) {
                        await this.repsElements.last?.setFocus();
                    }
                }
                break;
            }
            case 'dynamicWeighted': {
                //TODO: BL-121
                break;
            }
            case 'staticBodyweight': {
                //TODO: BL-128
                break;
            }
            case 'staticWeighted': {
                //TODO: BL-123
                break;
            }
            default: {
                isNeverCheck(setCategory);
            }
        }
    }
}
