import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { EMPTY, from, of } from 'rxjs';
import { concatMap, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { SelectedSetCategoriesChanged } from '../../../../../models/training/new-training/single-exercise/set/set.model';
import { SetDto as Set } from '../../../../../../api/models/set-dto';
import { UnsubscribeService } from '../../../../../services/shared/unsubscribe.service';
import {
    convertSetDurationUnit,
    convertWeightUnit,
} from '../../../../../helpers/training/convert-units.helper';
import { NewTrainingDto as NewTraining } from '../../../../../../api/models/new-training-dto';
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
} from '../../../../../models/training/new-training/single-exercise/set/set-form.type';
import { PreferencesStoreService } from '../../../../../services/store/shared/preferences-store.service';
import { PreferencesDto as Preferences } from '../../../../../../api/models/preferences-dto';
import { ChangeSetCategoryComponent } from './change-set-category/change-set-category.component';
import { SetComponent } from './set/set.component';

@Component({
    selector: 'bl-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    providers: [UnsubscribeService],
})
export class SetsComponent implements OnInit {
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

    @Input()
    sets: Set[] = [];

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
    selectedSetCategoriesChanged = new EventEmitter<SelectedSetCategoriesChanged>();

    @ViewChildren('set', { read: SetComponent })
    setCmps: QueryList<SetComponent>;

    constructor(
        private _unsubscribeService: UnsubscribeService,
        private _newTrainingStoreService: NewTrainingStoreService,
        private _preferencesStoreService: PreferencesStoreService,
        private _modalController: ModalController,
    ) {}

    ngOnInit(): void {
        if (this.sets?.length > 0) {
            for (const set of this.sets) {
                this.addSet(set);
            }
        }

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
                    case 'staticWeighted': {
                        if (setIndex > 0) {
                            if (!currentSetCmpData.weightElement.value) {
                                this.onSetDeleted(setIndex);
                                await previousSetCmpData.durationElement.setFocus();
                            }
                        }
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
            case 'duration': {
                switch (currentSetCmpData.activeSetCategory) {
                    case 'staticBodyweight': {
                        if (setIndex > 0) {
                            if (!currentSetCmpData.durationElement.value) {
                                this.onSetDeleted(setIndex);
                                await previousSetCmpData.durationElement.setFocus();
                            }
                        }
                        break;
                    }
                    case 'staticWeighted': {
                        if (!currentSetCmpData.durationElement.value) {
                            await currentSetCmpData.weightElement.setFocus();
                        }
                        break;
                    }
                }
                break;
            }
            default: {
                isNeverCheck(setConstituent);
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
                this.selectedSetCategoriesChanged.emit({
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
            this.selectedSetCategoriesChanged.emit({ setChangedType: 'addSet', setCategory });
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
                this.selectedSetCategoriesChanged.emit({
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
                    total +=
                        this.bodyweightControl.value +
                        group.controls.weight.value +
                        group.controls.duration.value;
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
                        return this._patchSetConstituentValue('weight', set);
                    }
                    case 'reps': {
                        return this._patchSetConstituentValue('reps', set);
                    }
                    case 'duration': {
                        return this._patchSetConstituentValue('duration', set);
                    }
                    default: {
                        isNeverCheck(setConstituent);
                    }
                }
            }
        }
        return null;
    }

    private _patchSetConstituentValue(setConstituent: SetConstituent, set: Set): number {
        switch (setConstituent) {
            case 'weight': {
                if (this.editTrainingData) {
                    const editTrainingWeightUnit = this.editTrainingData.preferences.weightUnit;
                    const currentWeightUnit =
                        this._preferencesStoreService.getPreferences().weightUnit;
                    if (editTrainingWeightUnit !== currentWeightUnit) {
                        return convertWeightUnit(currentWeightUnit, set.weight);
                    }
                }
                return set.weight;
            }
            case 'reps': {
                return set.reps;
            }
            case 'duration': {
                if (this.editTrainingData) {
                    const editTrainingSetDurationUnit =
                        this.editTrainingData.preferences.setDurationUnit;
                    const currentSetDurationUnit =
                        this._preferencesStoreService.getPreferences().setDurationUnit;
                    if (editTrainingSetDurationUnit !== currentSetDurationUnit) {
                        return convertSetDurationUnit(editTrainingSetDurationUnit, set.duration);
                    }
                }
                return set.duration;
            }
            default: {
                isNeverCheck(setConstituent);
            }
        }
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
                setControls = this._constructSetForm(
                    'weight',
                    {
                        setNumber: constructionType === 'newExercise' ? 1 : indexSet + 1,
                        weight: set ? set.weight : null,
                    },
                    setControls,
                );
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
            default: {
                isNeverCheck(setCategory);
            }
        }
    }
}
