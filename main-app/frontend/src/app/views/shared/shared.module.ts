import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';
import { NotFoundResolverService } from '../../services/shared/not-found-resolver.service';
import { SanitizeHtmlModule } from '../../pipes/shared/sanitize-html/sanitize-html.module';
import { PaginationDirective } from '../../directives/pagination/pagination.directive';
import { SkeletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteTrainingActionComponent } from './training/training-actions/delete-training-action/delete-training-action.component';
import { MoreTrainingActionComponent } from './training/training-actions/more-training-action/more-training-action.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DateTimePickerComponent } from './datetime-picker/datetime-picker.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { DayOfWeekComponent } from './day-of-week/day-of-week.component';

const DIRECTIVES = [PaginationDirective];

const COMPONENTS = [
    NotFoundComponent,
    PaginationComponent,
    DateTimePickerComponent,
    SkeletonLoaderComponent,
    DayOfWeekComponent,
];

const ACTION_COMPONENTS = [DeleteTrainingActionComponent, MoreTrainingActionComponent];

const EXTERNAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    IonicModule,
];

const IMPORTS = [PipesModule, SkeletonLoaderModule, SanitizeHtmlModule];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES, ...ACTION_COMPONENTS],
    imports: [...EXTERNAL_IMPORTS, ...IMPORTS],
    exports: [...COMPONENTS],
    providers: [NotFoundResolverService],
})
export class SharedModule {}
