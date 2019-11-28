import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewUserPage } from '../new-user/new-user';
import { HomePage } from '../home/home';
import { RegisterProjectPage } from '../register-project/register-project';
import { ListProjectsPage } from '../list-projects/list-projects';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  newUser() {
    this.navCtrl.push(NewUserPage);
  }
  openPage(){
    this.navCtrl.setRoot(ListProjectsPage);
  }

}
