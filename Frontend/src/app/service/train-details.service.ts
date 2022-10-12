import { HttpClient , HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainDetailsService {

 

  addTrainDetailsURL !: string;
  getTrainDetailsURL !: string;
  updateTrainDetailsUrl !: string;
  deleteTrainDetailsUrl !: string;
  
  constructor(private http: HttpClient) { 

    this.addTrainDetailsURL = 'http://localhost:8084/trains/addTrain';
    this.getTrainDetailsURL = 'http://localhost:8084/search/findAllTrains';
    this.updateTrainDetailsUrl = 'http://localhost:8084/trains/update';
    this.deleteTrainDetailsUrl ='http://localhost:8084/trains/delete/';

  }

  addTrain(train : Train) : Observable<Train>{
    return this.http.post<Train>(this.addTrainDetailsURL,train);
  }

  getAllTrains(): Observable<Train[]>{
    return this.http.get<Train[]>(this.getTrainDetailsURL);
  }

  updateTrain(train : Train) : Observable<Train>{
    return this.http.put<Train>(this.updateTrainDetailsUrl , train);
  }

  deleteTrain(train : Train) : Observable<Train> {
    return this.http.delete<Train>(this.deleteTrainDetailsUrl + train.trainid);
  }
}
