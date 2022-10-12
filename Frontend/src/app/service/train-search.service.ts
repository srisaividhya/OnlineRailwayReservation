import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainSearchService {

  constructor(private http: HttpClient) { }

  findAllTrains():Observable<Train[]>{
    return this.http.get<Train[]>("http://localhost:8084/search/findAllTrains")
  }
}
