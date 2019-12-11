import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { NewUserPage } from '../new-user/new-user';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { HttpClient } from '@angular/common/http';
import { RegisterProjectPage } from '../register-project/register-project';
import { ListProjectsPage } from '../list-projects/list-projects';
import { ToastPresentProvider } from '../../providers/toast-present/toast-present';
import { LoadingControllerProvider } from '../../providers/loading-controller/loading-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  url = 'http://localhost:3000';
  email: any;
  password: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient, private toastprovider: ToastPresentProvider,
     public menuCtrl: MenuController, public loadingcontroller: LoadingControllerProvider) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  newUser() {
    this.navCtrl.push(NewUserPage);

  }
  openResetPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
 openLogin(email, password) {
    const objUser = {
      email,
      password
    };
    if (this.validForm()) {
     this.http.post(`${this.url}/auth/authenticate`, objUser).subscribe(res => {
      this.loadingcontroller.present();
        try {
          this.setName();
          this.navCtrl.setRoot(ListProjectsPage);
          this.loadingcontroller.stopLoader();
          
          
          localStorage.setItem('name', res.user.name);
          localStorage.setItem('email', res.user.email);
          localStorage.setItem('token', res.token);
          } catch (err) {
        }
        console.log(res)
      }, err => {
        this.toastprovider.presentToast(err.error.error);
      });
    }

  }
  openPage(){
    this.navCtrl.setRoot(ListProjectsPage);
  }
  validForm() {

    if (this.email == null || this.email == "") {
      this.toastprovider.presentToast('Campo Email obrigatório.');
      return false;
    }
    if (this.password == null || this.password == "") {
      this.toastprovider.presentToast('Campo Senha obrigatório.');
      return false;
    }
    return true;

  }
  setName() {
    this.user = localStorage.getItem('name');
  }
 

}
