import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarseComponent } from './registrarse.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirebaseAuth } from 'src/app/core/service/firebaseAuth.service';
import { Auth } from '@angular/fire/auth';

describe('RegistrarseComponent', () => {
  let component: RegistrarseComponent;
  let fixture: ComponentFixture<RegistrarseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistrarseComponent,FirebaseAppModule],
    providers: [
      FirebaseAuth,
      { provide:Auth, useValue: {} }
    ]
  });
    fixture = TestBed.createComponent(RegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
