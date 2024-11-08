import { provideRouter } from '@angular/router';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes} from './app/app.routes' 
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { getApp, initializeApp } from '@angular/fire/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { firebaseConfig} from "src/enviroment/enviroment"
bootstrapApplication(AppComponent,{
  providers:[
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(ReactiveFormsModule),
    importProvidersFrom(provideFirebaseApp(()=>initializeApp(firebaseConfig))),
    importProvidersFrom(provideAuth(()=>initializeAuth(getApp()))),
    importProvidersFrom(provideFirestore(()=> getFirestore())),
    importProvidersFrom(provideStorage(()=> getStorage()))
  ]
});
