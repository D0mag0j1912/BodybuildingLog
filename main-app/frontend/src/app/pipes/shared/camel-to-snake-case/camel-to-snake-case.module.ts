import { NgModule } from '@angular/core';
import { CamelToSnakeCasePipe } from './camel-to-snake-case.pipe';

@NgModule({
    declarations: [CamelToSnakeCasePipe],
    exports: [CamelToSnakeCasePipe],
})
export class CamelToSnakeCaseModule {}
