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

  newUser(name, email, password){
    const objUser = {
      name,
      email,
      password
    };
  
     this.http.post(`${this.url}/auth/register`, objUser).subscribe(res => {
      try {
        this.toastprovider.presentToast('Usuário criado com sucesso!');
        this.navCtrl.pop();
      } catch (err) {
        alert("ERRO AO SALVAR");
      }
    console.log(res)
     });
    }
  
  
}
