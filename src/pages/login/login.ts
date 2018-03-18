import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
              public app: App,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  user = {
  }


  doLogin(user) {
    this.authentic.login({user: { email: user.email, 
                                  password: user.password, 
                                  session: { email: user.email, password: user.password}
                                }
                          }
                        ).subscribe(response => {
                                                  this.presentLoading();
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

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Acesso Permitido!',
      duration: 4000
      //dismissOnPageChange: true
    }).present();
  }
}
