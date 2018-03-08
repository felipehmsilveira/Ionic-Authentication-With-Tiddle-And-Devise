import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthenticUserProvider } from '../../providers/authentic-user/authentic-user';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AuthenticUserProvider
  ]
})
export class HomePage {

  userAbility: any

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public authentic: AuthenticUserProvider,
              public app: App) {

  }

  ionViewDidLoad() {
    this.userAbility = this.navParams.get('data');
  }

}
