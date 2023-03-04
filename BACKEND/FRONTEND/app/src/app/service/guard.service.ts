export class GuardService{

  loggedIn : boolean = false

  login(){

    this.loggedIn = true
  }


  IsAuthenticated(){

    if(localStorage.getItem('token') != null)
    {
      return true;
    }
    else{
      return false;

    }

  }
}
