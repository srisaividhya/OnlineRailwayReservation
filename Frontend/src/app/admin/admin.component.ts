import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
import { Train } from '../model/train';
import { TrainDetailsService } from '../service/train-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 

  trainDetail !: FormGroup;
  trains = new Train();
  trainList : Train [] = [];

  constructor(private formBuilder : FormBuilder, private trainDetailsService : TrainDetailsService) { }

  ngOnInit(): void {

    this.getAllTrains();

    this.trainDetail = this.formBuilder.group({
      trainid : [''],
      trainName : [''],
      source: [''],
      destination: [''],
      runDays : [''],
      arrivalTime: [''],
      departureTime: ['']

    }); 

  }

  addTrain(){
    console.log(this.trainDetail);
    this.trains.trainid = this.trainDetail.value.trainid;
    this.trains.trainName = this.trainDetail.value.trainName;
    this.trains.source = this.trainDetail.value.source;
    this.trains.destination = this.trainDetail.value.destination;
    this.trains.runDays = this.trainDetail.value.runDays;
    this.trains.arrivalTime = this.trainDetail.value.arrivalTime;
    this.trains.departureTime = this.trainDetail.value.departureTime;


    this.trainDetailsService.addTrain(this.trains).subscribe(res=>{
        console.log(res);
        this.getAllTrains();
    },err=>{
        console.log(err);
    });
  }

  getAllTrains() {
    this.trainDetailsService.getAllTrains().subscribe(res=>{
        this.trainList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editTrain(train : Train) {
    this.trainDetail.controls['trainid'].setValue(train.trainid);
    this.trainDetail.controls['trainName'].setValue(train.trainName);
    this.trainDetail.controls['source'].setValue(train.source);
    this.trainDetail.controls['destination'].setValue(train.destination);
    this.trainDetail.controls['runDays'].setValue(train.runDays);
    this.trainDetail.controls['arrivalTime'].setValue(train.arrivalTime);
    this.trainDetail.controls['departureTime'].setValue(train.departureTime);


  }

  updateTrain() {

    this.trains.trainid = this.trainDetail.value.trainid;
    this.trains.trainName = this.trainDetail.value.trainName;
    this.trains.source = this.trainDetail.value.source;
    this.trains.destination = this.trainDetail.value.destination;
    this.trains.runDays = this.trainDetail.value.runDays;
    this.trains.arrivalTime = this.trainDetail.value.arrivalTime;
    this.trains.departureTime = this.trainDetail.value.departureTime;

    this.trainDetailsService.updateTrain(this.trains).subscribe(res=>{
      console.log(res);
      this.getAllTrains();
    },err=>{
      console.log(err);
    })

  } 
  

  

  deleteTrain(train : Train) {

    this.trainDetailsService.deleteTrain(train).subscribe(res=>{
      console.log(res);
     
      this.getAllTrains();
    },err => {
      console.log(err);
    });

  }

}
