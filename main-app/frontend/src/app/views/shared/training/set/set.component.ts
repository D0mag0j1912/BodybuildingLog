import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
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
import { Observable, of } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { Preferences } from '../../../../models/common/preferences.model';
import { SetStateChanged } from '../../../../models/training/shared/set.model';
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
export class SetsComponent implements ControlValueAccessor, OnInit, OnChanges {
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

    @Output()
    readonly setUpdated: EventEmitter<SetStateChanged> = new EventEmitter<SetStateChanged>();

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
        this.form.setValidators([SetValidators.allSetsFilled()]);
        this.form.updateValueAndValidity();

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

    getSets(): AbstractControl[] {
        return (this.form as FormArray<FormGroup<FormType<Set>>>).controls;
    }

    addSet(set?: Set): void {
        const setProperties: FormType<Set> = Object.assign({});
        setProperties['setNumber'] = new FormControl(
            set ? set.setNumber : this.getSets().length + 1,
            {
                nonNullable: true,
                validators: [Validators.required],
            },
        );
        setProperties['weightLifted'] = new FormControl(
            {
                value: this._setFormValue('weightLifted', set),
                disabled: this.exerciseNameControl.value ? false : true,
            },
            [
                Validators.required,
                Validators.min(1),
                Validators.max(1000),
                Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
            ],
        );
        setProperties['reps'] = new FormControl(
            {
                value: this._setFormValue('reps', set),
                disabled: this.exerciseNameControl.value ? false : true,
            },
            [
                Validators.required,
                Validators.min(1),
                Validators.max(1000),
                Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
            ],
        );
        this.form.push(new FormGroup<FormType<Set>>(setProperties));
        of(null)
            .pipe(delay(200), takeUntil(this._unsubscribeService))
            .subscribe(async (_) => {
                if (this.weightLiftedElements) {
                    await this.weightLiftedElements.last?.setFocus();
                }
            });
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
        let isWeightLiftedValid = false;
        let isRepsValid = false;
        const weightLiftedCtrl = this.accessFormField('weightLifted', indexSet);
        const repsCtrl = this.accessFormField('reps', indexSet);
        const setNumberCtrl = this.accessFormField('setNumber', indexSet);
        if (weightLiftedCtrl.valid && weightLiftedCtrl?.value) {
            isWeightLiftedValid = true;
        }
        if (repsCtrl.valid && repsCtrl?.value) {
            isRepsValid = true;
        }
        this.setUpdated.emit({
            indexExercise: this.indexExercise,
            indexSet: indexSet,
            isWeightLiftedValid: isWeightLiftedValid,
            isRepsValid: isRepsValid,
            newTotal: this._calculateTotal(),
            newSet: {
                setNumber: +setNumberCtrl.value,
                weightLifted: +weightLiftedCtrl.value,
                reps: +repsCtrl.value,
            } as Set,
        } as SetStateChanged);
    }

    accessFormField(formField: keyof ModelWithoutIdType<Set>, indexSet: number): AbstractControl {
        return this.form.at(indexSet)?.get(formField);
    }

    private _calculateTotal(): number {
        let total = 0;
        for (const group of this.getSets()) {
            total += +group.get('weightLifted')?.value * +group.get('reps')?.value;
        }
        return total;
    }

    private _setWeightLiftedValue(weightLifted: number): number {
        if (this.editTrainingData) {
            const editTrainingWeightUnit = this.editTrainingData.weightUnit ?? DEFAULT_WEIGHT_UNIT;
            if (editTrainingWeightUnit !== this._currentWeightUnit) {
                return +convertWeightUnit(this._currentWeightUnit, weightLifted);
            }
        }
        return weightLifted;
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
}
