import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProjectsPage } from './list-projects';

@NgModule({
  declarations: [
    ListProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProjectsPage),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ListProjectsPageModule {}
