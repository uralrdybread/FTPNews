import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2deb7310ab8443e2815b0f46104d6dd1"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2deb7310ab8443e2815b0f46104d6dd1"

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2deb7310ab8443e2815b0f46104d6dd1"

  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews(): Observable<any>{
    return this._http.get(this.businessApiUrl)
  }

}
