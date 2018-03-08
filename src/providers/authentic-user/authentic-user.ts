import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticUserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticUserProvider Provider');
  }

  private url:string = 'http://localhost:3000/auth/';


  login(data: any) {
    return this.http.post(this.url + 'sign_in', data);
  }

  logout(userAbility: any) {
    return this.http.delete(this.url + 'sign_out', userAbility);
  }

}
