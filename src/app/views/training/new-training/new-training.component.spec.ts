import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewTrainingComponent } from './new-training.component';

describe('NewTrainingComponent', () => {
    let component: NewTrainingComponent;
    let fixture: ComponentFixture<NewTrainingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ NewTrainingComponent ],
            imports:[
                HttpClientTestingModule,
                RouterTestingModule,
            ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NewTrainingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
