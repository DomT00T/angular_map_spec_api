import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  News:any = [];
  //API 
  REST_API:String = 'http://dev-sw6-uapi.ecm.in.th/uapi/drt-ElectronicsDocument';

  //Http Header
  HttpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpclient: HttpClient) {}
  // Get All News
  GetNews (){
    return this.httpclient.get(`${this.REST_API}/ED-GetNews?EmployeeId=3`)
  }

  UpdateNew (item:any,status:any): Observable<any> {
    let API_URL =  `${this.REST_API}/ED-UpdateStatusNews` 
    return this.httpclient.post(API_URL,{"NewsId": item.NewsId,"Status" : status},{headers:this.HttpHeaders})
  }

}
