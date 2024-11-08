import { NgClass, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginCredentials } from 'src/app/core/interfaz/login-credentials.interface';
import { FirebaseAuth } from 'src/app/core/service/firebaseAuth.service';
const USER='user';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone:true,
  imports:[NgIf, NgClass, ReactiveFormsModule]
})
export class InicioComponent{
  public formCarga!:FormGroup;
  private fire = inject(FirebaseAuth);
  constructor(private formBuilder:FormBuilder){
    this.buildForms();
  }
  buildForms(){
  this.formCarga=this.formBuilder.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(7)]],})
  }
  public get Email(){
    return this.formCarga.get('email');
  }
  public get Password(){
    return this.formCarga.get('password');
  }
  public onEnviar(){
    let form:LoginCredentials=this.formCarga.value;
    if (form.email!=null && form.password!=null){
      this.fire.loginUp(form).then(userCredential=>{
        sessionStorage.setItem(USER,JSON.stringify(userCredential.user));
        location.pathname='/home';
      }).catch((error)=>{
        console.log(error = error.code+'|'+error.message)
      })
    }
  }
}