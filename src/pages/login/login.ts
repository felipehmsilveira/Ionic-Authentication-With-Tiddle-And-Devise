import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticUserProvider } from '../../providers/authentic-user/authentic-user';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    AuthenticUserProvider
  ],
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authentic: AuthenticUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginData = {}


  doLogin() {

  }

  register() {

  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
