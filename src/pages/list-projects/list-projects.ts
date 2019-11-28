import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-projects',
  templateUrl: 'list-projects.html',
})
export class ListProjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProjectsPage');
  }

}
