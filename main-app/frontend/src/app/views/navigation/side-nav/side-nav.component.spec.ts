import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
    let component: SideNavComponent;
    let fixture: ComponentFixture<SideNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SideNavComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
