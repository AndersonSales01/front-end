import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterProjectPage } from '../pages/register-project/register-project';
import { ListProjectsPage } from '../pages/list-projects/list-projects';
import { LoginPage } from '../pages/login/login';
import { NewUserPage } from '../pages/new-user/new-user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterProjectPage,
    ListProjectsPage,
    LoginPage,
    NewUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterProjectPage,
    ListProjectsPage,
    LoginPage,
    NewUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
