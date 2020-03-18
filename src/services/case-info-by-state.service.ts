import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseInfoByStateService {

  constructor(private http: HttpClient) { }
  getCaseInfoByState(url){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});
    let options ={headers: headers};
   return this.http.get(url, options).pipe(
     map((response: Response) =>{
       return response;
     }, err =>{
       console.log('Error in GETCASEINFO API', err);
     })
   );
  }

  getAllCaseInfo(url2){
      const headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});
      let options ={headers: headers};
     return this.http.get(url2, options).pipe(
       map((response: Response) =>{
         return response;
       }, err =>{
         console.log('Error in GETALLCASEINFO API', err);
       })
     );
    }
}
