import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Firestore} from '@angular/fire/firestore';
import { FirestoreService } from './core/service/firestore.service';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirebaseAuth } from './core/service/firebaseAuth.service';
import { Auth } from '@angular/fire/auth';
import { By } from '@angular/platform-browser';
import { CssSelector } from '@angular/compiler';
describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app:AppComponent;
  beforeEach(async () =>{
    TestBed.configureTestingModule({
    imports: [RouterTestingModule,FirebaseAppModule,AppComponent],
    providers: [
      FirestoreService,
        { provide: Firestore, useValue: {} },
        FirebaseAuth,
        { provide: Auth, useValue: {} }  
      ]}
      ).compileComponents()
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('crea la app', () => {
    expect(app).toBeTruthy();
  });
  
  it ('Esta es una pagina de prueba, no es real.',()=>{
    const element:HTMLElement=fixture.nativeElement;
    expect(element.textContent).toContain('Esta es una pagina de prueba, no es real.');
  })
});