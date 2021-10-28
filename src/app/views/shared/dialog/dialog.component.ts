import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable } from "rxjs";

export interface DialogData {
    isError: boolean;
    message?: string;
    deleteExercise?: DeleteExerciseDialogData;
}

export interface DeleteExerciseDialogData {
    message$: Observable<string>;
    exerciseName: string;
}

@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: DialogData,
    ){}
}
