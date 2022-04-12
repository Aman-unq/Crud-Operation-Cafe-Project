import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeserviceService {
  url = "http://localhost:3000/Cafe";
  rooturl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  saveCafe(data: any) {
    return this.http.post(this.url, data)
  }
  getList() {
    return this.http.get(this.url)
  }
  deleteCafe(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  getcurrentCafe(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateCafe(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerCafe(data: any) {
    return this.http.post(this.rooturl + "users", data)
  }
  loginCafe(data: any) {
    return this.http.post(this.rooturl + "login", data)
  }
}