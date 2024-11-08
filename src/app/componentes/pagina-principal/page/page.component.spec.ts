import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PageComponent,RouterTestingModule]
  });
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
