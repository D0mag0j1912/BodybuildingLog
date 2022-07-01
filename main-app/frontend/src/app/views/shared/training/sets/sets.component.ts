import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { ExerciseStateType } from '../../../../models/training/new-training/training.model';
import { SetStateChanged } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { FormSetData, SetConstituent, SetFormValidationErrors } from '../../../../models/training/shared/set.type';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import * as CommonValidators from '../../../../validators/shared/common.validators';
import * as SetValidators from '../../../../validators/training/set.validators';

@Component({
    selector: 'bl-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        getControlValueAccessor(SetsComponent),
        UnsubscribeService,
    ],
})
export class SetsComponent implements ControlValueAccessor, OnInit, OnChanges {

    readonly form: FormArray = new FormArray([]);

    onTouched: () => void;

    @Input()
    isExerciseFormSubmitted$: Observable<boolean> = of(false);

    @Input()
    exerciseStateChanged$: Observable<ExerciseStateType> = of(null);

    @Input()
    exerciseNameControl: AbstractControl | null;

    @Input()
    indexExercise = 0;

    @Input()
    editMode = false;

    @Input()
    isLoading = false;

    @Output()
    readonly setAdded: EventEmitter<SetStateChanged> = new EventEmitter<SetStateChanged>();

    @Output()
    readonly setDeleted: EventEmitter<Partial<SetStateChanged>> = new EventEmitter<Partial<SetStateChanged>>();

    @Output()
    readonly formStateChanged: EventEmitter<SetFormValidationErrors[]> = new EventEmitter<SetFormValidationErrors[]>();

    @ViewChildren('weightLiftedEl')
    readonly weightLiftedEl: QueryList<IonInput>;

    constructor(
        private readonly unsubscribeService: UnsubscribeService,
    ) { }

    get formErrors(): SetFormValidationErrors[] {
        let errors: SetFormValidationErrors[] = [];
        if (this.form?.errors) {
            const mappedKeys: SetFormValidationErrors[] = Object.keys(this.form.errors).map((key: string) => key as SetFormValidationErrors);
            errors = errors.concat(mappedKeys);
        }
        this.form.controls.forEach((group: AbstractControl) => {
            if (group?.errors) {
                const mappedKeys: SetFormValidationErrors[] = Object.keys(group.errors).map((key: string) => key as SetFormValidationErrors);
                errors = errors.concat(mappedKeys);
            }
        });
        return errors;
    }

    ngOnInit(): void {
        this.form.setValidators([SetValidators.allSetsFilled()]);
        this.form.updateValueAndValidity();
        this.formStateChanged.emit(this.formErrors);

        this.exerciseNameControl.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe((value: string) => {
                value ? this.accessFormField('weightLifted', 0).enable() : this.accessFormField('weightLifted', 0).disable();
                value ? this.accessFormField('reps', 0).enable() : this.accessFormField('reps', 0).disable();
            });

        this.exerciseStateChanged$
            .pipe(
                filter(state => state === 'Update'),
                delay(200),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(async _ => {
                if (this.weightLiftedEl?.first) {
                    await this.weightLiftedEl.first.setFocus();
                }
            });
    }

    ngOnChanges(): void {
        this.form.updateValueAndValidity({ emitEvent: true });
    }

    writeValue(sets: Set[]): void {
        if (sets) {
            if (sets.length > 0) {
                for (const set of sets) {
                    this.addSet(set);
                }
            }
            else {
                this.addSet();
            }
        }
    }
    //Sending parent new form value when form value changes
    registerOnChange(fn: (formValue: Partial<Set[]>) => void): void {
        this.form.valueChanges
            .pipe(
                takeUntil(this.unsubscribeService),
            )
            .subscribe((formValue: Partial<Set[]>) => {
                this.formStateChanged.emit(this.formErrors);
                fn(formValue as Partial<Set[]>);
            });
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    getSets(): AbstractControl[] {
        return (this.form as FormArray).controls;
    }

    addSet(set?: Set): void {
        this.form.push(
            new FormGroup({
                setNumber: new FormControl(set ? (set.setNumber as number) : this.getSets().length + 1, [Validators.required]),
                weightLifted: new FormControl({
                    value: set ? set.weightLifted : null,
                    disabled: this.exerciseNameControl.value ? false : true,
                }, [Validators.min(1),
                    Validators.max(1000),
                    CommonValidators.isNumber()]),
                reps: new FormControl({
                    value: set ? set.reps : null,
                    disabled: this.exerciseNameControl.value ? false : true,
                }, [Validators.min(1),
                    Validators.max(1000),
                    Validators.pattern('^[0-9]*$')]),
            }, {
                validators: [SetValidators.bothValuesRequired(), SetValidators.isSetValid()],
            }),
        );
        of(null)
            .pipe(
                delay(200),
                takeUntil(this.unsubscribeService),
            )
            .subscribe(async _ => {
                if (this.weightLiftedEl) {
                    await this.weightLiftedEl.last?.setFocus();
                }
            });
    }

    deleteSet(indexSet: number): void {
        this.form.removeAt(indexSet);
        this.setDeleted.emit({
            indexExercise: this.indexExercise as number,
            indexSet: indexSet as number,
            newTotal: this.calculateTotal(),
        } as Partial<SetStateChanged>);
    }

    onChangeSets(indexSet: number): void {
        let total = 0;
        let isWeightLiftedValid = false;
        let isRepsValid = false;
        if (this.accessFormField('weightLifted', indexSet)?.valid && this.accessFormField('weightLifted', indexSet)?.value) {
            isWeightLiftedValid = true;
        }
        if (this.accessFormField('reps', indexSet)?.valid && this.accessFormField('reps', indexSet)?.value) {
            isRepsValid = true;
        }
        if (isWeightLiftedValid && isRepsValid) {
            total = this.calculateTotal();
        }
        this.setAdded.emit({
            indexExercise: this.indexExercise,
            indexSet: indexSet,
            isWeightLiftedValid: isWeightLiftedValid,
            isRepsValid: isRepsValid,
            newTotal: total,
            newSet: {
                setNumber: +this.accessFormField('setNumber', indexSet).value,
                weightLifted: +this.accessFormField('weightLifted', indexSet).value,
                reps: +this.accessFormField('reps', indexSet).value,
            } as Set,
        } as SetStateChanged);
    }

    accessFormField(
        formField: keyof FormSetData,
        indexSet: number,
    ): AbstractControl {
        return this.form.at(indexSet)?.get(formField);
    }

    setIonComponentClass(
        set: AbstractControl,
        isExerciseFormSubmitted: boolean,
        exerciseName: string | undefined,
        setConstituent: SetConstituent,
    ): boolean {
        return ((setConstituent === 'weightLifted' ? set.errors?.weightLiftedRequired : set.errors?.repsRequired) && (isExerciseFormSubmitted || !!exerciseName));
    }

    private calculateTotal(): number {
        let total = 0;
        for (const group of this.getSets()) {
            total += (+group.get('weightLifted')?.value * +group.get('reps')?.value);
        }
        return total;
    }

}
