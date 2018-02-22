import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private authenticated: boolean = false;

  constructor() { }

  signIn(login: string, password: string): boolean {
    return this.authenticated = login === 'admin' && password === 'pass';
  }

  signOut() {
    this.authenticated = false;
  }

  get isAuthenticated(): boolean {
    return this.authenticated;
  }
}
