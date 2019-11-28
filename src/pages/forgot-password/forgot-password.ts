import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { LoadingControllerProvider } from '../../providers/loading-controller/loading-controller';
import { ToastPresentProvider } from '../../providers/toast-present/toast-present';



@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  url = 'http://localhost:3000';
  email: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private http: HttpClient, public loadingprovider: LoadingControllerProvider,
    public toastprovider: ToastPresentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  resetPassword(email) {
    const objUser = {
      email
    };
    if (this.validForm()) {
      this.loadingprovider.present();
      this.http.post(`${this.url}/auth/forgot_password`, objUser).subscribe(res => {
        try {
          this.toastprovider.presentToast('Email Enviado, Verifique sua caixa de email');
          this.navCtrl.setRoot(LoginPage);
          this.loadingprovider.stopLoader();
        } catch (err) {
          alert('email não cadastrado');
        }
         
  }, err =>{
    this.toastprovider.presentToast(err.error.error);
    this.loadingprovider.stopLoader();

   });
}

  }
  validForm() {

    if (this.email == null || this.email == "") {
      this.toastprovider.presentToast('Campo Email obrigatório.');
      return false;
    }

    return true;

  }

}
