import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  constructor(private http: HttpClient) { }
  data(){
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story ');
  }
}
