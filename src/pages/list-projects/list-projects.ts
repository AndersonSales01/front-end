import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Project } from '../../models/project';
import { RegisterProjectPage } from '../register-project/register-project';


@IonicPage()
@Component({
  selector: 'page-list-projects',
  templateUrl: 'list-projects.html',
})
export class ListProjectsPage {

  // listProject: any[] = [];
  listProject: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {
  }

  ionViewDidEnter() {
    this.listProject = [];
    this.loadListProjects();
  }

  loadListProjects() {
    this.serviceProvider.getListProjects().subscribe(res => {

      this.listProject = res.body.projects;
      // localStorage.setItem('token', JSON.stringify(this.listProject));
      console.log("list", this.listProject);
    }, err => {
      console.log("Error", err.status);
      console.log("msg error", err.error);
    });
  }
  editProject(project) {
    this.navCtrl.push(RegisterProjectPage, {
      obj: project
    });
    console.log("projectSelected", project);
  }

}
