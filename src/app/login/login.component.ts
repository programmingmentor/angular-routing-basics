import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticated: boolean;
  errorText: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.authenticated = this.auth.isAuthenticated;
  }

  signIn(formFields: any) {
    this.authenticated = this.auth.signIn(formFields.name, formFields.password);  
    if (!this.authenticated) {
      this.showError('Invalid credentials!');
    }
  }

  signOut() {
    this.auth.signOut();
    this.authenticated = false;
  }

  showError(text) {
    this.errorText = text;
    setTimeout( () => this.errorText = '', 1000 );
  }
 

}
