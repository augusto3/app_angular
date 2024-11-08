import { Injectable} from '@angular/core';
import { Auth,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from '@angular/fire/auth';
import { LoginCredentials } from '../interfaz/login-credentials.interface';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth{
  constructor (private auth:Auth){}
  signUpGoogle(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  async signUp(login:LoginCredentials){
    return await createUserWithEmailAndPassword(this.auth, login.email, login.password);
  }
  async loginUp(login:LoginCredentials){
    return await signInWithEmailAndPassword(this.auth, login.email, login.password);
  }
  signOut(){
    signOut(this.auth)
    .then(() => {sessionStorage.clear();
      console.log('se ha cerrado sesion');
    })
    .catch((error) => {console.log(error);});
  }
}