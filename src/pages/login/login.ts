import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticUserProvider } from '../../providers/authentic-user/authentic-user';
import { RegisterPage } from '../register/register';
import { App } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { Headers } from '@angular/http';

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
              public authentic: AuthenticUserProvider,
              public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  user = {
  }


  doLogin(user) {
    this.authentic.login({email: user.email, password: user.password})
                  .subscribe(response => {
      this.app.getRootNav().setRoot(HomePage, response);
    }, error => {
      this.app.getRootNav().setRoot(LoginPage);
    })
  }

  register() {

  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
