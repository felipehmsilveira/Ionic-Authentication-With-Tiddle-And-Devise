import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticUserProvider } from '../../providers/authentic-user/authentic-user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AuthenticUserProvider
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public authentic: AuthenticUserProvider) {

  }


  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
