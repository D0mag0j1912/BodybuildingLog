import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NewTraining } from '../../../../models/training/new-training.model';
import { format } from 'date-fns';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.scss']
})
export class TrainingItemComponent implements OnInit {

    @Input()
    training: NewTraining;

    timeCreated: string;

    weekDays: string[] = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];

    dayIndex: number;

    constructor(
        private readonly sharedService: SharedService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.timeCreated = format(this.sharedService.subtractTwoHours(new Date(this.training.createdAt)), 'HH:mm');
        this.dayIndex = this.sharedService.subtractTwoHours(this.training.createdAt).getDay();
    }

    trainingClicked(): void {
        this.router.navigate(['/new-training', this.training._id]);
    }

}
