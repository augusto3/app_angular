import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ProductoComponent, RouterTestingModule],
  });
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('',()=>{

  })
});
