import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig, header } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  registerProject (project) : Observable<any> {
   return this.http.post(`${apiConfig.BASE_URL}/projects`, project, { headers: header,observe: 'response' });
  }

  getListProjects() : Observable<any>{
    return this.http.get(`${apiConfig.BASE_URL}/projects`,  { headers: header,observe: 'response' });
  }

  editProject(project){
    //Retira o atributo id do objeto.
    let { id, ...projectData } = project;
    return this.http.put(`${apiConfig.BASE_URL}/projects/${id}`, projectData, { headers: header,observe: 'response' });
  }

}
