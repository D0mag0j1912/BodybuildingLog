import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
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
import { ModalController } from '@ionic/angular';
import { EMPTY, from, of } from 'rxjs';
import { concatMap, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { Set, SetTrainingData } from '../../../../models/training/shared/set/set.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import { convertWeightUnit } from '../../../../helpers/training/convert-weight-units.helper';
import { DEFAULT_WEIGHT_UNIT } from '../../../../constants/shared/default-weight-format.const';
import { NewTraining } from '../../../../models/training/new-training/new-training.model';
import { NewTrainingStoreService } from '../../../../services/store/training/new-training-store.service';
import { SetCategoryType, SetConstituent } from '../../../../models/training/shared/set/set.type';
import { isNeverCheck } from '../../../../helpers/is-never-check.helper';
import { DialogRoles } from '../../../../constants/enums/model-roles.enum';
import {
    FormConstructionType,
    SetFormType,
    SetFormValue,
} from '../../../../models/training/shared/set/set-form.type';
import { WeightUnit } from '../../../../models/common/preferences.type';
import { PreferencesStoreService } from '../../../../services/store/shared/preferences-store.service';
import { Preferences } from '../../../../models/common/preferences.model';
import { ChangeSetCategoryComponent } from './change-set-category/change-set-category.component';
import { SetConstituentComponent } from './set-constituent/set-constituent.component';

@Component({
    selector: 'bl-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    providers: [getControlValueAccessor(SetsComponent), UnsubscribeService],
})
export class SetsComponent implements ControlValueAccessor, OnInit {
    currentPreferences$ = this._preferencesStoreService.preferencesChanged$;

    currentWeightUnit: WeightUnit;
    currentBodyweight: number;
    form = new FormArray<FormGroup<SetFormType>>([]);

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

    @Output()
    selectedCategoriesChanged = new EventEmitter<SetCategoryType>();

    @ViewChildren('set', { read: SetConstituentComponent })
    setCmps: QueryList<SetConstituentComponent>;

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this.currentWeightUnit =
            this._preferencesStoreService.getPreferences().weightUnit ?? DEFAULT_WEIGHT_UNIT;

        this.currentPreferences$
            .pipe(
                filter(
                    (preferences: Preferences) => this.currentWeightUnit !== preferences.weightUnit,
                ),
                takeUntil(this._unsubscribeService),
            )
            .subscribe((preferences: Preferences) => {
                this.currentWeightUnit = preferences.weightUnit;
            });

        this.selectedSetCategoriesControl.valueChanges
            .pipe(
                map((setCategories: SetCategoryType[]) => {
                    const selectedSetCategories = setCategories;
                    while (this.form.length !== 0) {
                        this.form.removeAt(0);
                    }
                    this._constructFormBasedOnSetCategory(selectedSetCategories[0], 'newExercise');
                    return {
                        index: this.indexExercise,
                        setCategory: selectedSetCategories[0],
                    };
                }),
                switchMap((value) =>
                    this._newTrainingStoreService.restartSets(value.index, value.setCategory),
                ),
                takeUntil(this._unsubscribeService),
            )
            .subscribe();

        this.bodyweightControl.valueChanges
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((_) => {
                if (this.bodyweightControl.valid) {
                    this.currentBodyweight = this.bodyweightControl.value;
                }
            });
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

    onSetChanged(
        data: { setData: SetTrainingData; setCategory: SetCategoryType },
        setIndex: number,
    ): void {
        const serviceData: SetTrainingData = {
            ...data.setData,
            setNumber: setIndex + 1,
            total: this._calculateTotal(),
        };
        this._newTrainingStoreService
            .setsChanged(serviceData)
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();
    }

    async onSetConstituentKeydownEmit(
        setConstituent: SetConstituent,
        setIndex: number,
    ): Promise<void> {
        if (setIndex > 0) {
            const currentSetCmpData = this.setCmps.toArray()[setIndex];
            const previousSetCmpData = this.setCmps.toArray()[setIndex - 1];
            switch (setConstituent) {
                case 'weightLifted': {
                    switch (previousSetCmpData.activeSetCategory) {
                        case 'freeWeighted' || 'dynamicBodyweight': {
                            if (!currentSetCmpData.weightLiftedElement?.value) {
                                await previousSetCmpData.repsElement?.setFocus();
                                this.onSetDeleted(setIndex);
                            }
                            break;
                        }
                    }
                    break;
                }
                case 'reps': {
                    switch (previousSetCmpData.activeSetCategory) {
                        case 'freeWeighted' || 'dynamicBodyweight': {
                            if (!currentSetCmpData.repsElement?.value) {
                                await previousSetCmpData.repsElement?.setFocus();
                                this.onSetDeleted(setIndex);
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }

    async onUpdateSetCategory(
        currentSetCategory: SetCategoryType,
        setIndex: number,
    ): Promise<void> {
        const modal = await this._modalController.create({
            component: ChangeSetCategoryComponent,
            componentProps: {
                setCategories: this.availableSetCategoriesControl.value,
                setCategory: currentSetCategory,
            },
            keyboardClose: true,
            canDismiss: true,
        });
        await modal.present();

        from(modal.onDidDismiss<SetCategoryType>())
            .pipe(
                concatMap((response: OverlayEventDetail<SetCategoryType>) => {
                    if (response.role === DialogRoles.CHANGE_SET_CATEGORY) {
                        if (currentSetCategory !== response.data) {
                            return this._newTrainingStoreService
                                .updatePrimarySetCategory(
                                    this.indexExercise,
                                    setIndex,
                                    response.data,
                                )
                                .pipe(
                                    map((_) => {
                                        this._constructFormBasedOnSetCategory(
                                            response.data,
                                            'sameExercise',
                                            undefined,
                                            setIndex,
                                        );
                                        return response.data;
                                    }),
                                );
                        }
                        return EMPTY;
                    }
                    return EMPTY;
                }),
                takeUntil(this._unsubscribeService),
            )
            .subscribe(async (setCategory: SetCategoryType) => {
                this.selectedCategoriesChanged.emit(setCategory);
            });
    }

    addSet(set?: Set): void {
        let setCategory: SetCategoryType;
        if (set) {
            setCategory = this.selectedSetCategoriesControl.value[this.form.controls.length];
        } else {
            setCategory = this.availableSetCategoriesControl.value[0] ?? 'freeWeighted';
            this.selectedCategoriesChanged.emit(setCategory);
        }
        this._constructFormBasedOnSetCategory(setCategory, 'newExercise', set);
        of(setCategory)
            .pipe(
                concatMap((setCategory: SetCategoryType) => {
                    if (!set) {
                        return this._newTrainingStoreService.addSet(
                            this.indexExercise,
                            setCategory,
                            this.form.controls.length,
                        );
                    } else {
                        return of(setCategory);
                    }
                }),
                takeUntil(this._unsubscribeService),
            )
            .subscribe();
    }

    onSetDeleted(setIndex: number): void {
        this.form.removeAt(setIndex);
        this._newTrainingStoreService
            .deleteSet(this.indexExercise, setIndex, this._calculateTotal())
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();
    }

    private _calculateTotal(): number {
        let total = 0;
        this.form.controls.forEach((group: FormGroup<SetFormType>, index: number) => {
            const setCategory = this.selectedSetCategoriesControl.value[index];
            switch (setCategory) {
                case 'freeWeighted': {
                    total += group.get('weightLifted')?.value * group.get('reps')?.value;
                    break;
                }
                case 'dynamicBodyweight': {
                    total += this.bodyweightControl.value * group.get('reps')?.value;
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
        return total;
    }

    private _setWeightLiftedValue(weightLifted: number): number {
        if (this.editTrainingData) {
            const editTrainingWeightUnit = this.editTrainingData.weightUnit ?? DEFAULT_WEIGHT_UNIT;
            if (editTrainingWeightUnit !== this.currentWeightUnit) {
                return convertWeightUnit(this.currentWeightUnit, weightLifted);
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
                    this.form.removeAt(indexSet);
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
