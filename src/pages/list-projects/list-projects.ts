import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Project } from '../../models/project';
import { RegisterProjectPage } from '../register-project/register-project';
import { ToastPresentProvider } from '../../providers/toast-present/toast-present';


@IonicPage()
@Component({
  selector: 'page-list-projects',
  templateUrl: 'list-projects.html',
})
export class ListProjectsPage {

  // listProject: any[] = [];
  listProject: Array<any>;
  idProjectSelect: String;
  token = localStorage.getItem('token');
  tasksSelected: Array<any>;
  isItemAvailable: boolean;
  items: any;




  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider, public menuCtrl: MenuController, private toastprovider: ToastPresentProvider) {
    this.menuCtrl.enable(true, 'myMenu');
    this.initializeItems();
  }

  ionViewDidEnter() {
    this.listProject = [];
    this.loadListProjects();
    
  }

  loadListProjects() {
    this.serviceProvider.getListProjects().subscribe(res => {

      this.listProject = res.body.projects;
      // localStorage.setItem('token',  res.token(this.listProject));
      console.log("list", this.listProject);
    }, err => {
      console.log("Error", err.status);
      this.toastprovider.presentToast(err.error.error);
    });
  }
  editProject(project) {
    this.navCtrl.push(RegisterProjectPage, {
      obj: project
    });
    console.log("projectSelected", project);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  removeProject(item) {

    this.serviceProvider.removeProject(item._id).subscribe(res => {
      this.toastprovider.presentToast('Projeto removido com sucesso!');
      this.loadListProjects();
      this.navCtrl.setRoot(ListProjectsPage);


    }, err => {
      this.toastprovider.presentToast(err.error.error);

    });
  }
  initializeItems() {
    this.items = this.listProject;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.title.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    }
  }

}
