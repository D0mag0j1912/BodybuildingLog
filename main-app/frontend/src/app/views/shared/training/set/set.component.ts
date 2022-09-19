import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    SimpleChanges,
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
import { delay, filter, switchMap, take, takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { Preferences } from '../../../../models/common/preferences.model';
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
import { SetConstituent } from '../../../../models/training/shared/set.type';

export type SetFormType = FormType<Set>;

type SetFormValue = ModelWithoutIdType<Set>;

@Component({
    selector: 'bl-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(SetsComponent), UnsubscribeService],
})
export class SetsComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private readonly _isWeightLifted$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true,
    );
    private readonly _isReps$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    readonly currentPreferences$: Observable<Preferences> =
        this._preferencesStoreService.preferencesChanged$;

    readonly form = new FormArray<FormGroup<SetFormType>>([]);
    private _currentWeightUnit: WeightUnit;

    onTouched: () => void;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    isExerciseFormSubmitted$: Observable<boolean>;

    @Input()
    isExerciseChanged$: Observable<void>;

    @Input()
    exerciseNameControl: AbstractControl | null;

    @Input()
    indexExercise = 0;

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
    ) {}

    ngOnInit(): void {
        this._currentWeightUnit =
            this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;
        //TODO: Update set validator to match new set category feature
        /* this.form.setValidators([SetValidators.allSetsFilled()]);
        this.form.updateValueAndValidity(); */

        this.exerciseNameControl.valueChanges
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((value: string) => {
                value
                    ? this.accessFormField('weightLifted', 0).enable()
                    : this.accessFormField('weightLifted', 0).disable();
                value
                    ? this.accessFormField('reps', 0).enable()
                    : this.accessFormField('reps', 0).disable();
            });

        this.isExerciseChanged$
            .pipe(delay(400), takeUntil(this._unsubscribeService))
            .subscribe(async (_) => {
                /* if (this.isWeightLifted) {
                    if (this.weightLiftedElements?.first) {
                        await this.weightLiftedElements.first.setFocus();
                    }
                }
                if (this.isReps) {
                    if (this.repsElements?.first) {
                        await this.repsElements.first.setFocus();
                    }
                } */
            });

        this.currentPreferences$
            .pipe(
                filter((preferences) => this._currentWeightUnit !== preferences.weightUnit),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((preferences) => {
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

    ngOnChanges(_changes: SimpleChanges): void {
        this.form.updateValueAndValidity({ emitEvent: true });
    }

    ngOnDestroy(): void {
        this._isWeightLifted$.complete();
        this._isReps$.complete();
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
    //Sending parent new form value when form value changes
    registerOnChange(fn: (value: SetFormValue[]) => void): void {
        this.form.valueChanges
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((formValue: SetFormValue[]) => fn(formValue));
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

    getSets(): FormGroup<FormType<Set>>[] {
        return this.form.controls;
    }

    addSet(set?: Set): void {
        this.form.push(
            new FormGroup<FormType<Set>>({
                setNumber: new FormControl(set ? set.setNumber : this.getSets().length + 1, {
                    nonNullable: true,
                    validators: [Validators.required],
                }),
                weightLifted: new FormControl(
                    {
                        value: set ? this._setWeightLiftedValue(set.weightLifted) : null,
                        disabled: this.exerciseNameControl.value ? false : true,
                    },
                    [
                        Validators.required,
                        Validators.min(1),
                        Validators.max(1000),
                        Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
                    ],
                ),
                reps: new FormControl(
                    {
                        value: set ? set.reps : null,
                        disabled: this.exerciseNameControl.value ? false : true,
                    },
                    [
                        Validators.required,
                        Validators.min(1),
                        Validators.max(1000),
                        Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
                    ],
                ),
            }),
        );
    }

    deleteSet(indexSet: number): void {
        this.form.removeAt(indexSet);
        this._newTrainingStoreService.deleteSet(
            this.indexExercise,
            indexSet,
            this._calculateTotal(),
        );
    }

    onChangeSets(indexSet: number): void {
        combineLatest([this._isWeightLifted$, this._isReps$])
            .pipe(
                take(1),
                switchMap(([isWeightLifted, isReps]: [boolean, boolean]) => {
                    const trainingData: SetTrainingData = {
                        exerciseName: this.exerciseNameControl.value,
                        setNumber: this.accessFormField('setNumber', indexSet).value,
                        weightLifted:
                            isWeightLifted && this._isSetConstituentValid('weightLifted', indexSet)
                                ? this.accessFormField('weightLifted', indexSet).value
                                : undefined,
                        reps:
                            isReps && this._isSetConstituentValid('reps', indexSet)
                                ? this.accessFormField('reps', indexSet).value
                                : undefined,
                        total: this._calculateTotal(),
                    };
                    return this._newTrainingStoreService.setsChanged(trainingData);
                }),
            )
            .subscribe();
    }

    accessFormField(
        formField: keyof ModelWithoutIdType<Set>,
        indexSet: number,
    ): AbstractControl<number> {
        return this.form.at(indexSet)?.get(formField);
    }
    //TODO: Refactor logic for 'dynamicBodyweight' category
    private _calculateTotal(): number {
        let total = 0;
        for (const group of this.getSets()) {
            total += group.get('weightLifted')?.value * group.get('reps')?.value;
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
        setControls: FormType<Set>,
    ): FormType<Set> {
        setControls[setConstituent] = new FormControl(
            {
                value: this._setFormValue(setConstituent, set),
                disabled: this.exerciseNameControl.value ? false : true,
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
}
