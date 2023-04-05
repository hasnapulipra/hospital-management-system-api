import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl : string = 'http://127.0.0.1:8000/admin/'
  constructor(private http: HttpClient) { }

  getdoctors(){
    return this.http.get(this.baseUrl+'load-doctor')
  }
  addDoctor(formdata : any):Observable<any>{
    return this.http.post(this.baseUrl+'add-doctor',formdata)
  }
}
