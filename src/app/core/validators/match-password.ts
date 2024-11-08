import { AbstractControl , ValidationErrors} from '@angular/forms' ; 

export function matchPassword(control:AbstractControl):ValidationErrors|null{
    if (control.value.password === control.value.confirmPassword){
        return null;
    }
    else{
        return {matchPassword:true};
    }
}