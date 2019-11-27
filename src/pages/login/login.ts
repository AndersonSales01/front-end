import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewUserPage } from '../new-user/new-user';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { HttpClient } from '@angular/common/http';
import { RegisterProjectPage } from '../register-project/register-project';
import { ListProjectsPage } from '../list-projects/list-projects';

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
    private http: HttpClient) {
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
openLogin(email, password){
  const objUser = {
    email,
    password
  };

   this.http.post(`${this.url}/auth/authenticate`, objUser).subscribe(res => {
    try {
      this.navCtrl.setRoot(ListProjectsPage);
    } catch (err) {
      return alert("SENHA INCORRETA");
      }
   });
  }
  openPage(){
    this.navCtrl.push(RegisterProjectPage);
  }

}
