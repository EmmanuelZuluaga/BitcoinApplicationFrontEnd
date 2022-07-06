import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}


  post(path: string, object: any) {
    return this.http.post(`${environment.backendUrl}` + path, object);
  }

 
  get(path: string) {
    return this.http.get(`${environment.backendUrl}` + path);
  }

  put(path: string, object: any) {
    return this.http.put(`${environment.backendUrl}` + path, object);
  }

  delete(path: string) {
    return this.http.delete(`${environment.backendUrl}` + path);
  }
}
