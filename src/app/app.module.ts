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
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvider } from '../providers/service/service';

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
    HttpClientModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
