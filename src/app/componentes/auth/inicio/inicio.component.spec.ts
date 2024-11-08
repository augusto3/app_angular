import { ComponentFixture, TestBed } from '@angular/core/testing';

import {InicioComponent} from './inicio.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirebaseAuth } from 'src/app/core/service/firebaseAuth.service';
import { Auth } from '@angular/fire/auth';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [InicioComponent,FirebaseAppModule],
    providers: [
      FirebaseAuth,
      { provide: Auth, useValue: {} }
    ]
  });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
