import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterProjectPage } from '../pages/register-project/register-project';
import { ListProjectsPage } from '../pages/list-projects/list-projects';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  user: string;

  rootPage: any = ListProjectsPage;

  pages: Array<{ title: string, component: any }>;
  app: any;
  userToken: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,

  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lista de projetos', component: ListProjectsPage },
      { title: 'Cadastrar Projeto', component: RegisterProjectPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.userToken = localStorage.getItem('token');

      if (this.userToken == null) {
        this.nav.setRoot(LoginPage);
      } else {
        this.nav.setRoot(ListProjectsPage);
      }
      this.setName();
    });
  }

  setName() {
    return localStorage.getItem('name');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutPage() {
    this.nav.setRoot(LoginPage);
    localStorage.clear()
  }



}
