import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

 readonly URL_API = 'http://localhost:3000/person';

  constructor( private http: HttpClient) { }

  postPerson(data : Person) {
    return this.http.post(this.URL_API, data)
  }

  getPersons() {
    return this.http.get(this.URL_API)
  }

  patchPerson(data: Person){
    return this.http.patch(this.URL_API+ `/${data._id}`,data)
  }

  deletePerson(data: Person){
    return this.http.delete(this.URL_API+`/${data._id}`)
  }
  
}

