import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const resptAPI = 'https://jsonplaceholder.typicode.com/users';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(resptAPI) as Observable<any>;
  }
}
