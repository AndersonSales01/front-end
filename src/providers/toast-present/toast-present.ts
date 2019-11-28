import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastPresentProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello ToastPresentProvider Provider');
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: 'toast-custom',
      showCloseButton: true,
      closeButtonText: 'x'
    });
      
    toast.present();
  }

}
