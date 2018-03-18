import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
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

//  userAbility = {
 //   email: '',
 //   name: '',
 //   nickname: ''
 // }


  userAbility = {
    id: 1,
    email: "user@example.com",
    name: "User One",
    nickname: "UOne",
}

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public authentic: AuthenticUserProvider,
              public app: App) {

  }

  ionViewDidLoad() {
    //this.userAbility = this.navParams.get('data');
    console.log(this.userAbility)
  }

}
