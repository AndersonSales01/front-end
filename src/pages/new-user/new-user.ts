import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { ToastPresentProvider } from '../../providers/toast-present/toast-present';



@IonicPage()
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html',
})
export class NewUserPage {

  url = 'http://localhost:3000';
  name: string;
  email: any;
  password: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,
    private toastprovider: ToastPresentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewUserPage');
  }

  newUser(name, email, password) {
    const objUser = {
      name,
      email,
      password
    };
    if (this.validForm()) {
      this.http.post(`${this.url}/auth/register`, objUser).subscribe(res => {
        try {
          this.toastprovider.presentToast('Usuário criado com sucesso!');
          this.navCtrl.pop();
        } catch (err) {
        }
        console.log(res)
      }, err =>{
        this.toastprovider.presentToast(err.error.error);
        console.log(err.error.error)
       });
    }

  }
  validForm() {

    if (this.name == null || this.name == "") {
      this.toastprovider.presentToast('Campo Nome obrigatório.');
      return false;
    }
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


}
