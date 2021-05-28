import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Menu } from './menulist';

@Injectable({
  providedIn: 'root'
})
export class MenumaintenanceService {
  APIUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  //getMenuList(): Observable<any[]> {
  //  return this.http.get<any[]>(this.APIUrl + '/MenuList');
  //}

  getMenuDtls(UID: number): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Menu?UID=' + UID);
  }

  //addMenu(val: any) {
  //  return this.http.post(this.APIUrl + '/menu', val);
  //}

  updateMenu(UID: number,val: any): Observable<any[]> {
    return this.http.put<any[]>(this.APIUrl + '/Menu?UID=' + UID , val);
  }
}
