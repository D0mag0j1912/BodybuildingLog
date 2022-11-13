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
    ControlValueAccessor,
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core';
import { IonInput, ModalController } from '@ionic/angular';
import { BehaviorSubject, EMPTY, from, of } from 'rxjs';
import {
    concatMap,
    delay,
    filter,
    map,
    switchMap,
    take,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { SetTrainingData } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { convertWeightUnit } from '../../../../helpers/training/convert-weight-units.helper';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { FormType } from '../../../../models/common/form.type';
import { ModelWithoutIdType } from '../../../../models/common/raw.model';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { SetCategoryType, SetConstituent } from '../../../../models/training/shared/set.type';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';
import { Preferences } from '../../../../models/common/preferences.model';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import { ChangeSetCategoryComponent } from './change-set-category/change-set-category.component';

export type SetFormType = Pick<FormType<Set>, SetConstituent>;

type SetFormValue = Pick<ModelWithoutIdType<Set>, SetConstituent>;

type FormConstructionType = 'newExercise' | 'sameExercise';

@Component({
    selector: 'bl-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [getControlValueAccessor(SetsComponent), UnsubscribeService],
})
export class SetsComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private _activeSetCategory$ = new BehaviorSubject<SetCategoryType>(null);

    activeSetCategory$ = this._activeSetCategory$.asObservable();
    currentPreferences$ = this._preferencesStoreService.preferencesChanged$;

    form = new FormArray<FormGroup<SetFormType>>([]);
    private _currentWeightUnit: WeightUnit;

    onTouched: () => void;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    indexExercise = 0;

    @Input()
    bodyweightControl: FormControl<number>;

    @Input()
    exerciseControl: FormControl<string>;

    @Input()
    availableSetCategoriesControl: FormControl<SetCategoryType[]>;

    @Input()
    selectedSetCategoriesControl: FormControl<SetCategoryType[]>;

    @Input()
    isSubmitted = false;

    @Input()
    editMode = false;

    @Input()
    isLoading = false;

    @ViewChildren('weightLiftedEl')
    weightLiftedElements: QueryList<IonInput>;

    @ViewChildren('repsEl')
    repsElements: QueryList<IonInput>;

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _preferencesStoreService: PreferencesStoreService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this._currentWeightUnit =
            this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;

        this.selectedSetCategoriesControl.valueChanges
            .pipe(
                map((setCategories: SetCategoryType[]) => {
                    const selectedSetCategories = setCategories;
                    while (this.form.length !== 0) {
                        this.form.removeAt(0);
                    }
                    this._constructFormBasedOnSetCategory(selectedSetCategories[0], 'newExercise');
                    this._changeDetectorRef.markForCheck();
                    return {
                        index: this.indexExercise,
                        setCategory: selectedSetCategories[0],
                    };
                }),
                switchMap((value) =>
                    this._newTrainingStoreService.restartSets(value.index, value.setCategory),
                ),
                delay(400),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                await this._focusSetConstituent(setCategory, 'first');
                this._activeSetCategory$.next(setCategory);
            });

        this.bodyweightControl.valueChanges
            .pipe(withLatestFrom(this._activeSetCategory$), takeUntil(this._unsubscribeService))
            .subscribe(([bodyweight, activeSetCategory]: [number, SetCategoryType]) => {
                if (this.bodyweightControl.valid) {
                    switch (activeSetCategory) {
                        case 'dynamicBodyweight': {
                            this.form.controls[0].controls.reps.enable();
                            break;
                        }
                    }
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
                    const currentWeightLiftedValue =
                        +this.form.controls[index].controls.weightLifted.value;
                    if (currentWeightLiftedValue) {
                        this.form.controls[index].controls.weightLifted.patchValue(
                            convertWeightUnit(preferences.weightUnit, currentWeightLiftedValue),
                        );
                    }
                });
            });
    }

    ngOnDestroy(): void {
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

    async updateSetCategory(indexSet: number): Promise<void> {
        const modal = await this._modalController.create({
            component: ChangeSetCategoryComponent,
            componentProps: {
                setCategories: this.availableSetCategoriesControl.value,
            },
            keyboardClose: true,
            canDismiss: true,
        });
        await modal.present();

        from(modal.onDidDismiss<SetCategoryType>())
            .pipe(
                concatMap((response: OverlayEventDetail<SetCategoryType>) => {
                    if (response.role === DialogRoles.CHANGE_SET_CATEGORY) {
                        return this._activeSetCategory$.pipe(
                            take(1),
                            concatMap((previousSetCategory: SetCategoryType) => {
                                if (previousSetCategory !== response.data) {
                                    return this._newTrainingStoreService
                                        .updatePrimarySetCategory(
                                            this.indexExercise,
                                            indexSet,
                                            response.data,
                                        )
                                        .pipe(
                                            map((_) => {
                                                this._constructFormBasedOnSetCategory(
                                                    response.data,
                                                    'sameExercise',
                                                    undefined,
                                                    indexSet,
                                                );
                                                this._changeDetectorRef.markForCheck();
                                                return response.data;
                                            }),
                                        );
                                }
                                return EMPTY;
                            }),
                        );
                    }
                    return EMPTY;
                }),
                delay(400),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                await this._focusSetConstituent(setCategory, 'first');
                this._activeSetCategory$.next(setCategory);
            });
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
        this._activeSetCategory$.pipe(take(1)).subscribe(async (setCategory: SetCategoryType) => {
            const repsInput = this.repsElements.find((_item, i) => i === index);
            switch (setCategory) {
                case 'freeWeighted': {
                    if (!repsInput?.value) {
                        const weightLiftedInput = this.weightLiftedElements?.find(
                            (_item: IonInput, i: number) => i === index,
                        );
                        if (weightLiftedInput) {
                            await weightLiftedInput.setFocus();
                        }
                    }
                    break;
                }
                case 'dynamicBodyweight': {
                    if (!repsInput?.value) {
                        const previousRepsInput = this.repsElements?.find(
                            (_item: IonInput, i: number) => i === index - 1,
                        );
                        if (previousRepsInput) {
                            await previousRepsInput.setFocus();
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
        });
    }

    getSets(): FormGroup<SetFormType>[] {
        return this.form.controls;
    }

    addSet(set?: Set): void {
        let setCategory: SetCategoryType;
        if (set) {
            setCategory = this.selectedSetCategoriesControl.value[this.getSets().length];
        } else {
            setCategory = this.availableSetCategoriesControl.value[0] ?? 'freeWeighted';
        }
        this._constructFormBasedOnSetCategory(setCategory, 'newExercise', set);
        of(setCategory)
            .pipe(
                concatMap((setCategory: SetCategoryType) => {
                    if (!set) {
                        return this._newTrainingStoreService.addSet(
                            this.indexExercise,
                            setCategory,
                            this.getSets().length,
                        );
                    } else {
                        return of(setCategory);
                    }
                }),
                delay(400),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                await this._focusSetConstituent(setCategory, 'last');
                this._activeSetCategory$.next(setCategory);
            });
    }

    deleteSet(indexSet: number): void {
        this.activeSetCategory$
            .pipe(
                take(1),
                concatMap((setCategory: SetCategoryType) =>
                    this._newTrainingStoreService.deleteSet(
                        this.indexExercise,
                        indexSet,
                        this._calculateTotal(setCategory),
                    ),
                ),
            )
            .subscribe((_) => {
                this.form.removeAt(indexSet);
            });
    }

    onChangeSets(indexSet: number): void {
        this.activeSetCategory$
            .pipe(
                take(1),
                switchMap((setCategory: SetCategoryType) => {
                    const weightLifted = this.form.controls[indexSet].controls.weightLifted?.value;
                    const reps = this.form.controls[indexSet].controls.reps?.value;
                    const trainingData: SetTrainingData = {
                        exerciseName: this.exerciseControl.value,
                        setNumber: indexSet + 1,
                        weightLifted:
                            weightLifted && this._isSetConstituentValid('weightLifted', indexSet)
                                ? this.form.controls[indexSet].controls.weightLifted.value
                                : undefined,
                        reps:
                            reps && this._isSetConstituentValid('reps', indexSet)
                                ? this.form.controls[indexSet].controls.reps.value
                                : undefined,
                        total: this._calculateTotal(setCategory),
                    };
                    return this._newTrainingStoreService.setsChanged(trainingData);
                }),
            )
            .subscribe();
    }

    private _calculateTotal(setCategory: SetCategoryType): number {
        let total = 0;
        for (const group of this.getSets()) {
            switch (setCategory) {
                case 'freeWeighted': {
                    total += group.get('weightLifted')?.value * group.get('reps')?.value;
                    break;
                }
                case 'dynamicBodyweight': {
                    total += this.bodyweightControl.value * group.get('reps')?.value;
                    break;
                }
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
        return this.form.controls[indexSet].controls[setConstituent].valid;
    }

    private _constructFormBasedOnSetCategory(
        setCategory: SetCategoryType,
        constructionType: FormConstructionType,
        set?: Set,
        indexSet?: number,
    ): void {
        let setControls: SetFormType = Object.assign({});
        switch (setCategory) {
            case 'freeWeighted': {
                setControls = this._constructSetForm(
                    'weightLifted',
                    { setNumber: 1, weightLifted: set ? set.weightLifted : null },
                    setControls,
                );
                setControls = this._constructSetForm(
                    'reps',
                    { setNumber: 1, reps: set ? set.reps : null },
                    setControls,
                );
                if (constructionType === 'newExercise') {
                    this.form.push(new FormGroup(setControls));
                } else {
                    this.form.insert(indexSet, new FormGroup(setControls));
                }
                break;
            }
            case 'dynamicBodyweight': {
                setControls = this._constructSetForm(
                    'reps',
                    { setNumber: 1, reps: set ? set.reps : null },
                    setControls,
                );
                if (constructionType === 'newExercise') {
                    this.form.push(new FormGroup(setControls));
                } else {
                    this.form.removeAt(indexSet);
                    this.form.insert(indexSet, new FormGroup(setControls));
                }
                if (!this.bodyweightControl?.errors) {
                    this.form.controls[0].controls.reps.enable();
                } else {
                    this.form.controls[0].controls.reps.disable();
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

    private async _focusSetConstituent(
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
