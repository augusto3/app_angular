import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootComponent } from './foot.component';

describe('FootComponent', () => {
  let component: FootComponent;
  let fixture: ComponentFixture<FootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FootComponent]
});
    fixture = TestBed.createComponent(FootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
