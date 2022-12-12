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
import { concatMap, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../../helpers/control-value-accessor.helper';
import {
    Set,
    SelectedCategoriesChanged,
} from '../../../../../models/training/new-training/single-exercise/set/set.model';
import { UnsubscribeService } from '../../../../../services/shared/unsubscribe.service';
import { convertWeightUnit } from '../../../../../helpers/training/convert-units.helper';
import { NewTraining } from '../../../../../models/training/new-training/new-training.model';
import { NewTrainingStoreService } from '../../../../../services/store/training/new-training-store.service';
import {
    SetCategoryType,
    SetConstituent,
    SetTrainingData,
} from '../../../../../models/training/new-training/single-exercise/set/set.type';
import { isNeverCheck } from '../../../../../helpers/is-never-check.helper';
import { DialogRoles } from '../../../../../constants/enums/dialog-roles.enum';
import {
    FormConstructionType,
    SetFormType,
    SetFormValueType,
} from '../../../../../models/training/new-training/single-exercise/set/set-form.type';
import { PreferencesStoreService } from '../../../../../services/store/shared/preferences-store.service';
import { PreferencesService } from '../../../../../services/shared/preferences.service';
import { Preferences } from '../../../../../models/common/preferences.model';
import { ChangeSetCategoryComponent } from './change-set-category/change-set-category.component';
import { SetComponent } from './set/set.component';

@Component({
    selector: 'bl-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    providers: [getControlValueAccessor(SetsComponent), UnsubscribeService],
})
export class SetsComponent implements ControlValueAccessor, OnInit {
    preferences$ = this._preferencesStoreService.preferencesChanged$.pipe(
        switchMap((preferences: Preferences) => {
            if (!this.editTrainingData) {
                return this._newTrainingStoreService
                    .updateNewTrainingPreferences('setDurationUnit', {
                        weightUnit: preferences.weightUnit,
                        setDurationUnit: preferences.setDurationUnit,
                    })
                    .pipe(map((_) => preferences));
            }
            return of(preferences);
        }),
        startWith(this._preferencesStoreService.getPreferences()),
    );

    form = new FormArray<FormGroup<SetFormType>>([]);

    onTouched: () => void;

    @Input()
    editTrainingData: NewTraining;

    @Input()
    exerciseIndex = 0;

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
    selectedCategoriesChanged = new EventEmitter<SelectedCategoriesChanged>();

    @ViewChildren('set', { read: SetComponent })
    setCmps: QueryList<SetComponent>;

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _preferencesService: PreferencesService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        this.selectedSetCategoriesControl.valueChanges
            .pipe(
                map((setCategories: SetCategoryType[]) => {
                    const selectedSetCategories = setCategories;
                    while (this.form.length !== 0) {
                        this.form.removeAt(0);
                    }
                    this._constructFormBasedOnSetCategory(selectedSetCategories[0], 'newExercise');
                    return {
                        index: this.exerciseIndex,
                        setCategory: selectedSetCategories[0],
                    };
                }),
                switchMap((value) =>
                    this._newTrainingStoreService.restartSets(value.index, value.setCategory),
                ),
                takeUntil(this._unsubscribeService),
            )
            .subscribe();
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

    registerOnChange(fn: (value: SetFormValueType[]) => void): void {
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
            .setsChanged(serviceData, data.setCategory)
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe();
    }

    async onSetConstituentKeydownEmit(
        setConstituent: SetConstituent,
        setIndex: number,
    ): Promise<void> {
        const currentSetCmpData = this.setCmps.toArray()[setIndex];
        const previousSetCmpData = this.setCmps.toArray()[setIndex - 1];
        switch (setConstituent) {
            case 'weight': {
                switch (currentSetCmpData.activeSetCategory) {
                    case 'freeWeighted':
                    case 'dynamicWeighted': {
                        if (setIndex > 0) {
                            if (!currentSetCmpData.weightElement.value) {
                                this.onSetDeleted(setIndex);
                                await previousSetCmpData.repsElement.setFocus();
                            }
                        }
                        break;
                    }
                }
                break;
            }
            case 'reps': {
                switch (currentSetCmpData.activeSetCategory) {
                    case 'freeWeighted':
                    case 'dynamicWeighted': {
                        if (!currentSetCmpData.repsElement.value) {
                            await currentSetCmpData.weightElement.setFocus();
                        }
                        break;
                    }
                    case 'dynamicBodyweight': {
                        if (setIndex > 0) {
                            if (!currentSetCmpData.repsElement.value) {
                                this.onSetDeleted(setIndex);
                                await previousSetCmpData.repsElement.setFocus();
                            }
                        }
                        break;
                    }
                }
                break;
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
                                    this.exerciseIndex,
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
                this.selectedCategoriesChanged.emit({
                    setChangedType: 'updateSet',
                    setCategory,
                    setIndex,
                });
            });
    }

    addSet(set?: Set): void {
        let setCategory: SetCategoryType;
        if (set) {
            setCategory = this.selectedSetCategoriesControl.value[this.form.controls.length];
        } else {
            if (this.selectedSetCategoriesControl.value.length > 1) {
                setCategory =
                    this.selectedSetCategoriesControl.value[this.form.controls.length - 1];
            } else {
                setCategory = this.selectedSetCategoriesControl.value[0] ?? 'freeWeighted';
            }
            this.selectedCategoriesChanged.emit({ setChangedType: 'addSet', setCategory });
        }
        this._constructFormBasedOnSetCategory(setCategory, 'newExercise', set);
        of(setCategory)
            .pipe(
                concatMap((setCategory: SetCategoryType) => {
                    if (!set) {
                        return this._newTrainingStoreService.addSet(
                            this.exerciseIndex,
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
            .deleteSet(this.exerciseIndex, setIndex, this._calculateTotal())
            .pipe(takeUntil(this._unsubscribeService))
            .subscribe((_) =>
                this.selectedCategoriesChanged.emit({
                    setChangedType: 'deleteSet',
                    setCategory: undefined,
                    setIndex,
                }),
            );
    }

    private _calculateTotal(): number {
        let total = 0;
        this.form.controls.forEach((group: FormGroup<SetFormType>, index: number) => {
            const setCategory = this.selectedSetCategoriesControl.value[index];
            switch (setCategory) {
                case 'freeWeighted': {
                    total += group.controls.weight.value * group.controls.reps.value;
                    break;
                }
                case 'dynamicBodyweight': {
                    total += this.bodyweightControl.value * group.controls.reps.value;
                    break;
                }
                case 'dynamicWeighted': {
                    total +=
                        (this.bodyweightControl.value + group.controls.weight.value) *
                        group.controls.reps.value;
                    break;
                }
                case 'staticBodyweight': {
                    total += this.bodyweightControl.value + group.controls.duration.value;
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

    private _constructSetForm(
        setConstituent: SetConstituent,
        set: Set,
        setControls: SetFormType,
    ): SetFormType {
        let initialValidators = [Validators.required, Validators.min(1), Validators.max(1000)];
        if (setConstituent === 'duration') {
            initialValidators = [Validators.required, Validators.min(0)];
        }
        setControls[setConstituent] = new FormControl(
            {
                value: this._setFormValue(setConstituent, set),
                disabled: !this.exerciseControl.value,
            },
            initialValidators,
        );
        return setControls;
    }

    private _setFormValue(setConstituent: SetConstituent, set: Set): number | null {
        if (set) {
            if (setConstituent in set) {
                switch (setConstituent) {
                    case 'weight': {
                        return this._setWeightValue(set.weight);
                    }
                    case 'reps': {
                        return set.reps;
                    }
                    case 'duration': {
                        return set.duration;
                    }
                    default: {
                        isNeverCheck(setConstituent);
                    }
                }
            }
        }
        return null;
    }

    private _setWeightValue(weight: number): number {
        if (this.editTrainingData) {
            const editTrainingWeightUnit = this.editTrainingData.preferences.weightUnit;
            const currentWeightUnit = this._preferencesStoreService.getPreferences().weightUnit;
            if (editTrainingWeightUnit !== currentWeightUnit) {
                return convertWeightUnit(currentWeightUnit, weight);
            }
        }
        return weight;
    }

    private _constructFormBasedOnSetCategory(
        setCategory: SetCategoryType,
        constructionType: FormConstructionType,
        set?: Set,
        indexSet?: number,
    ): void {
        let setControls: SetFormType = Object.assign({});
        switch (setCategory) {
            case 'freeWeighted':
            case 'dynamicWeighted': {
                setControls = this._constructSetForm(
                    'weight',
                    {
                        setNumber: constructionType === 'newExercise' ? 1 : indexSet + 1,
                        weight: set ? set.weight : null,
                    },
                    setControls,
                );
                setControls = this._constructSetForm(
                    'reps',
                    {
                        setNumber: constructionType === 'newExercise' ? 1 : indexSet + 1,
                        reps: set ? set.reps : null,
                    },
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
                    {
                        setNumber: constructionType === 'newExercise' ? 1 : indexSet + 1,
                        reps: set ? set.reps : null,
                    },
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
            case 'staticBodyweight': {
                setControls = this._constructSetForm(
                    'duration',
                    {
                        setNumber: constructionType === 'newExercise' ? 1 : indexSet + 1,
                        duration: set ? set.duration : null,
                    },
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
