import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  url = 'http://localhost:3000';
  email: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  resetPassword(email){
    const objUser = {
      email
    };
  
     this.http.post(`${this.url}/auth/forgot_password`, objUser).subscribe(res => {
      try {
      this.presentAlert();
      this.navCtrl.setRoot(LoginPage);
      } catch (err) {
        }
     });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Email enviado',
      subTitle: 'Verifique sua caixa de email',
      buttons: ['OK']
    });
    alert.present();
  }

}
