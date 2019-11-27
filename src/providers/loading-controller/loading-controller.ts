import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingControllerProvider {
  loading: any;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
  }
  stopLoader() {
    if (this.loading && this.loading.instance) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  present() {
    this.stopLoader();

    this.loading = this.loadingCtrl.create({
      content: ''
    });

    this.loading.present();
  }
  dismiss() {
    this.stopLoader();
  }


}
