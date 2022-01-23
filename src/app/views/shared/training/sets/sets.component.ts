import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getControlValueAccessor } from '../../../../helpers/control-value-accessor.helper';
import { FormErrorStateMatcher } from '../../../../helpers/error-matchers/form-error-state-matcher.helper';
import { SetStateChanged } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { FormSetData } from '../../../../models/training/shared/set.model';
import { SetFormValidationErrors } from '../../../../models/training/shared/set.model';
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
    readonly formErrorStateMatcher: FormErrorStateMatcher = new FormErrorStateMatcher();

    onTouched: () => void;

    @Input()
    isExerciseFormSubmitted$: Observable<boolean> = of(false);

    @Input()
    exerciseStateChanged$: Observable<void> = of(null);

    @Input()
    exerciseNameControl: AbstractControl | null;

    @Input()
    indexExercise: number = 0;

    @Input()
    editMode: boolean = false;

    @Input()
    isLoading: boolean = false;

    @Output()
    readonly setAdded: EventEmitter<SetStateChanged> = new EventEmitter<SetStateChanged>();

    @Output()
    readonly setDeleted: EventEmitter<Partial<SetStateChanged>> = new EventEmitter<Partial<SetStateChanged>>();

    @Output()
    readonly formStateChanged: EventEmitter<SetFormValidationErrors[]> = new EventEmitter<SetFormValidationErrors[]>();

    constructor(
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
    ) {}

    ngOnInit(): void {
        this.form.setValidators([SetValidators.allSetsFilled()]);
        this.form.updateValueAndValidity();
        this.formStateChanged.emit(this.formErrors);

        this.exerciseNameControl.valueChanges.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((value: string) => {
            value ? this.accessFormField('weightLifted', 0).enable() : this.accessFormField('weightLifted', 0).disable();
            value ? this.accessFormField('reps', 0).enable() : this.accessFormField('reps', 0).disable();
        });
    }

    ngOnChanges(): void {
        this.form.updateValueAndValidity({ emitEvent: true });
    }

    writeValue(value: Set[]): void {
        if (value.length > 0) {
            for (const set of value) {
                this.addSet(set);
            }
        }
        else {
            this.addSet();
        }
    }
    //Sending parent new form value when form value changes
    registerOnChange(fn: (formValue: Partial<Set[]>) => void): void {
        this.form.valueChanges.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((formValue: Partial<Set[]>) => {
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
                'setNumber': new FormControl(set ? (set.setNumber as number) : this.getSets().length + 1, [Validators.required]),
                'weightLifted': new FormControl({
                    value: set ? (set.weightLifted as number) : null,
                    disabled: this.exerciseNameControl.value ? false : true,
                }, [Validators.min(1),
                    Validators.max(1000),
                    CommonValidators.isBroj()]),
                'reps': new FormControl({
                    value: set ? (set.reps as number) : null,
                    disabled: this.exerciseNameControl.value ? false : true,
                }, [Validators.min(1),
                    Validators.max(1000),
                    Validators.pattern('^[0-9]*$')]),
            }, {
                validators: [SetValidators.bothValuesRequired(), SetValidators.isSetValid()],
            }),
        );
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
        let total: number = 0;
        let isWeightLiftedValid: boolean = false;
        let isRepsValid: boolean = false;
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
            indexExercise: this.indexExercise as number,
            indexSet: indexSet as number,
            isWeightLiftedValid: isWeightLiftedValid as boolean,
            isRepsValid: isRepsValid as boolean,
            newTotal: total as number,
            newSet: {
                setNumber: +this.accessFormField('setNumber', indexSet).value,
                weightLifted: +this.accessFormField('weightLifted', indexSet).value,
                reps: +this.accessFormField('reps', indexSet).value,
            } as Set,
        } as SetStateChanged);
    }

    showAddSetTooltip(isSetError: boolean): Observable<string> {
        if (isSetError) {
            return this.translateService.stream('training.new_training.first_add_previous_set', {
                setNumber: this.getSets().length > 0 ? this.getSets().length : 1,
            });
        }
        else {
            return of('');
        }
    }

    showDeleteSetTooltip(indexSet: number): Observable<string> {
        if (indexSet > 0) {
            return this.translateService.stream('training.new_training.buttons.delete_set');
        }
        else {
            return this.translateService.stream('training.new_training.errors.delete_first_set');
        }
    }

    accessFormField(
        formField: keyof FormSetData,
        indexSet: number,
    ): AbstractControl {
        return this.form.at(indexSet)?.get(formField);
    }

    private calculateTotal(): number {
        let total: number = 0;
        for(const group of this.getSets()){
            total += (+group.get('weightLifted')?.value * +group.get('reps')?.value);
        }
        return total;
    }

    get formErrors(): SetFormValidationErrors[] {
        let errors: SetFormValidationErrors[] = [];
        if (this.form.errors) {
            const mappedKeys: SetFormValidationErrors[] =
                Object.keys(this.form.errors)
                    .map((key: string) => key as SetFormValidationErrors);
            errors = errors.concat(mappedKeys);
        }
        this.form.controls.forEach((group: AbstractControl) => {
            if (group?.errors) {
                const mappedKeys: SetFormValidationErrors[] =
                    Object.keys(group.errors)
                        .map((key: string) => key as SetFormValidationErrors);
                errors = errors.concat(mappedKeys);
            }
        });
        return errors;
    }

}
