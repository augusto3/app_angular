import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendadoComponent } from './recomendado.component';

describe('RecomendadoComponent', () => {
  let component: RecomendadoComponent;
  let fixture: ComponentFixture<RecomendadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RecomendadoComponent],
    });
    fixture = TestBed.createComponent(RecomendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
