import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { apiConfig, header } from '../../environments/environment';
import { ServiceProvider } from '../../providers/service/service';
import { ListProjectsPage } from '../list-projects/list-projects';

/**
 * Generated class for the RegisterProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-project',
  templateUrl: 'register-project.html',
})
export class RegisterProjectPage {

  title: String;
  description: String;
  tasks: Array<any>;
  isEdit: boolean;
  buttonName: String;
  titleScreen: String;
  idProjectSelect: String;
  tasksSelected: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.initVariables();
    this.checkIfEditingOrSubscribing();
  }

  initVariables() {
    this.isEdit = false;
    this.buttonName = "Cadastrar";
    this.titleScreen = "Cadastrar Projeto";
    this.tasksSelected = [];
    this.setTaks()
  }

  setTaks() {

    this.tasks = [
      {
        title: "Tarefa Front End 1",
        assignedTo: "5dd82ce42cf5ad0172e47491"
      },
      {
        title: "Tarefa Front End 2",
        assignedTo: "5dd82ce42cf5ad0172e47491"
      },
      {
        title: "Tarefa Front End 3",
        assignedTo: "5dd82ce42cf5ad0172e47491"
      },
    ]
  }

  checkIfEditingOrSubscribing() {

    const project = this.getParamsScreen();

    if (project !== null && project !== undefined) {
      this.title = project.title;
      this.description = project.description;
      this.buttonName = "Editar";
      this.titleScreen = "Editar Projeto";
      this.idProjectSelect = project._id;
      this.isEdit = true;
      this.tasksSelected = project.tasks;
    } else {
      this.isEdit = false;
    }
  }

  getParamsScreen() {
    return this.navParams.get('obj');
  }

  actionButton(title, description) {
    if (this.validForm()) {
      if (this.isEdit === true) {
        this.editProject(title, description);
        this.navCtrl.pop();
      } else {
        this.saveProject(title, description);
      }
    }
  }

  async saveProject(title, description) {

    console.log("entrou no Cadastrar");

    const project = {
      title,
      description,
      tasks: this.tasksSelected
    }

    console.log("Project", project);

    await this.serviceProvider.registerProject(project).subscribe(res => {
      console.log("response", res);
      console.log("body", res.body);
      console.log("status", res.headers.status);
      this.navCtrl.setRoot(ListProjectsPage);
    }, err => {

    });

    
  }

  editProject(title, description) {

    console.log("entrou no editar");

    let task = {
      title: "tarefa front end",
      assignedTo: "5dd82ce42cf5ad0172e47491"
    }

    this.tasks.push(task)


    const project = {
      id: this.idProjectSelect,
      title,
      description,
      tasks: this.tasksSelected
    }
    console.log("project", project);
    this.serviceProvider.editProject(project).subscribe(res => {
      console.log("response", res);
      console.log("body", res.body);
      // console.log("status", res.headers.status);
    }, err => {

    });
  }

  validForm() {
    if (this.title == null || this.title == "" || this.title == undefined) {
      return false;
    }
    if (this.description == null || this.description == ""  || this.description == undefined) {
      return false
    }
    if (this.tasksSelected.length == 0  || this.tasksSelected == undefined) {
      return false
    }

    return true;
  }

}
