import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable } from "rxjs";

@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data:
            {
                message?: string,
                brisanje?: {
                    message$: Observable<string>,
                    exerciseName: string
                },
                isError: boolean
            }
    ){}
}
