import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadComponent } from './head.component';
import { FirebaseAuth } from 'src/app/core/service/firebaseAuth.service';
import { FirebaseAppModule } from '@angular/fire/app';
import { Auth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeadComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FirebaseAppModule, RouterTestingModule],
    providers:[FirebaseAuth,
      {provide:Auth,useValue:{}}
    ]
  }).compileComponents();
    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('prueba de boton boolean',()=>{
    expect(component.mostrarBarra).toBeFalse();
    component.cambio();
    expect(component.mostrarBarra).toBeTrue();
  })

  it ('titulo :"FreeShop"',()=>{
    const element:HTMLElement=fixture.nativeElement;
    expect(element.textContent)
    .withContext('title in html')
    .toContain("FreeShop")
    expect(component.titulo)
    .withContext('title en ts')
    .toBe("FreeShop");
  })
});
