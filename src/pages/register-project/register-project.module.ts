import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterProjectPage } from './register-project';

@NgModule({
  declarations: [
    RegisterProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterProjectPage),
  ],
})
export class RegisterProjectPageModule {}
