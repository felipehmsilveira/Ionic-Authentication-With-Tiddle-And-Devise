import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthenticUserProvider } from '../../providers/authentic-user/authentic-user';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [
    AuthenticUserProvider
  ]
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authentic: AuthenticUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  regData = {}

  doSignup() {

  }

}
