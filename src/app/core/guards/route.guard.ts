const USER = 'user';
function onAuth():boolean{
  let aux:any = sessionStorage.getItem(USER);
  let user= JSON.parse(aux);
  if (user!=null) {
    return true;
  }else{
    return false;
  }
}
export const isLoggin =()=>{
  if (onAuth()){
    return true;
  }else{
    window.location.pathname='/auth/login';
    return false;
  }
}
export const isNotLoggin =()=>{
  if (onAuth()){
    window.location.pathname='/home';
    return false;
  }else{
    return true;
  }
}