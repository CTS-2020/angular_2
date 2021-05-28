import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menulist';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  APIUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getMenuList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Menu');
  }

  //getMenuDtls(UID: number): Observable<any[]> {
  //  const user = this.http.get<any[]>(this.APIUrl + '/menu?UID=' + UID);
  //  return user;
  //}

  //addMenu(val: any) {
  //  return this.http.post(this.APIUrl + '/menu', val);
  //}

  //updateMenu(val: any) {
  //  return this.http.put(this.APIUrl + '/menu', val);
  //}
}
