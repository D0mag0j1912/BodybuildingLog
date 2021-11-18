import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SetStateChanged } from '../../../../models/training/shared/set.model';
import { Set } from '../../../../models/training/shared/set.model';
import { SetFormErrors } from '../../../../models/training/shared/set.model';
import { FormSetData } from '../../../../models/training/shared/set.model';
import { UnsubscribeService } from '../../../../services/shared/unsubscribe.service';
import * as NewTrainingValidators from '../../../../validators/new-training.validators';

const CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SetsComponent),
    multi: true,
};

@Component({
    selector: 'app-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CONTROL_VALUE_ACCESSOR,
        UnsubscribeService,
    ],
})
export class SetsComponent implements ControlValueAccessor, OnInit {

    readonly form: FormArray = new FormArray([]);

    onTouched: () => void;

    @Input()
    exerciseNameControl: AbstractControl;

    @Input()
    indexExercise: number;

    @Input()
    editMode: boolean = false;

    @Input()
    isLoading: boolean = false;

    @Output()
    readonly setAdded: EventEmitter<SetStateChanged> = new EventEmitter<SetStateChanged>();

    @Output()
    readonly setDeleted: EventEmitter<Partial<SetStateChanged>> = new EventEmitter<Partial<SetStateChanged>>();

    @Output()
    readonly formStateChanged: EventEmitter<SetFormErrors> = new EventEmitter<SetFormErrors>();

    constructor(
        private readonly translateService: TranslateService,
        private readonly unsubscribeService: UnsubscribeService,
    ){}

    ngOnInit(): void {
        this.exerciseNameControl.valueChanges.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe((value: string) => {
            value ? this.accessFormField('weightLifted', 0).enable() : this.accessFormField('weightLifted', 0).disable();
            value ? this.accessFormField('reps', 0).enable() : this.accessFormField('reps', 0).disable();
        });
    }

    writeValue(value: Set[]): void {
        this.form.setValidators([NewTrainingValidators.allSetsFilled(), NewTrainingValidators.atLeastOneSet()]);
        this.form.updateValueAndValidity();
        if(value.length > 0) {
            for(const set of value) {
                this.addSet(set);
            }
        }
        else {
            this.addSet();
        }
        this.formStateChanged.emit({
            wholeFormErrors: this.formErrors,
            firstSetInvalid: this.isFirstSetInvalid() as boolean,
        } as SetFormErrors);
    }

    registerOnChange(fn: () => void): void {
        this.form.valueChanges.pipe(
            takeUntil(this.unsubscribeService),
        ).subscribe(() => this.formStateChanged.emit({
            wholeFormErrors: this.formErrors as ValidationErrors,
            firstSetInvalid: this.isFirstSetInvalid() as boolean,
        } as SetFormErrors));
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
                    NewTrainingValidators.isBroj()]),
                'reps': new FormControl({
                    value: set ? (set.reps as number) : null,
                    disabled: this.exerciseNameControl.value ? false : true,
                }, [Validators.min(1),
                    Validators.max(1000),
                    Validators.pattern('^[0-9]*$')]),
            }, {
                validators: [NewTrainingValidators.bothValuesRequired()],
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
        if(this.accessFormField('weightLifted', indexSet).valid && this.accessFormField('weightLifted', indexSet).value){
            isWeightLiftedValid = true;
        }
        if(this.accessFormField('reps', indexSet).valid && this.accessFormField('reps', indexSet).value){
            isRepsValid = true;
        }
        if(isWeightLiftedValid && isRepsValid){
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
        if(isSetError){
            return this.translateService.stream('training.new_training.first_add_previous_set', {
                setNumber: this.getSets().length > 0 ? this.getSets().length : 1,
            });
        }
        else {
            return of('');
        }
    }

    showDeleteSetTooltip(indexSet: number): Observable<string> {
        if(indexSet > 0){
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
        return this.form.at(indexSet).get(formField);
    }

    private calculateTotal(): number {
        let total = 0;
        for(const group of this.getSets()){
            total += (+group.get('weightLifted').value * +group.get('reps').value);
        }
        return total as number;
    }

    private isFirstSetInvalid(): boolean {
        return this.accessFormField('weightLifted', 0).errors || this.accessFormField('reps', 0).errors ? true : false;
    }

    get formErrors(): ValidationErrors {
        return this.form.errors;
    }

}
