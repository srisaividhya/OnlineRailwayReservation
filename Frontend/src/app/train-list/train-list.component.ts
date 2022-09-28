import { HttpClient} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Train } from '../model/train';
import { TrainSearchService } from '../service/train-search.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {


    searchText:any;
    totalLength:any;
    page:number=1;

    train = new Train();
    trainList : Train [] = [];
  
    constructor(private trainSearchService : TrainSearchService) { }

    ngOnInit():void{

      this.trainSearchService.findAllTrains().subscribe(
        data=>{
          this.trainList=data;
        }
      )
  }
}
