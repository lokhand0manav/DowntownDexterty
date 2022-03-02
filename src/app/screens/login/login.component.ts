import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  themeList = [
    "Travel","Comedy","Podcasts","Travel","Comedy","Podcasts"
  ];

  themeChosen : any[]= [];

  form: any = {
    username: null,
    email: null,
    phNo:null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  
  emailRE = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.{1,1}[a-z]{3,}$';
  phNoRE = '(?!0)^[0-9]{10,10}';
  constructor(private authService: AuthService, 
              private tokenStorage: TokenStorageService,
              private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, email, phNo } = this.form;
    this.isLoggedIn = this.authService.login(username, email, phNo);
    if(this.isLoggedIn){
      this.isLoginFailed = false;
      this.reloadPage();
    }
    this.isLoginFailed = true;
  }

  reloadPage(): void {
    this.router.navigate(['/screen/media'])
  }

  themeSelected(theme : any){
    if(theme.target.classList.contains("hoopr-btn-selected")){
      theme.target.classList.remove("hoopr-btn-selected");
      var index = this.themeChosen.indexOf(theme.target.innerText);
      if(index !== -1){
        this.themeChosen.splice(index,1);
      }
    }else{
      theme.target.classList.add("hoopr-btn-selected");
      this.themeChosen.push(theme.target.innerText);
    }
  }
}
