import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BookingOrder } from '../model/booking-order';
import { BookingOrderService } from '../service/booking-order.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  
  bookingOrderDetail !: FormGroup;

  bookingOrder = new BookingOrder();
  bookingOrderList :  BookingOrder [] = [];


  constructor( private formBuilder : FormBuilder, private bookingOrderService : BookingOrderService) { }

  ngOnInit(): void {
  

    this.bookingOrderDetail = this.formBuilder.group({
      id : [''],
      passengers: [''],
      source: [''],
      destination: ['']
    });
   
  }
  //paymentLink='/payment'
  paymentLink ='http://localhost:8083'


  addOrder(){
    console.log(this.bookingOrderDetail);
    this.bookingOrder.id = this.bookingOrderDetail.value.id;
    this.bookingOrder.passengers = this.bookingOrderDetail.value.passengers;
    this.bookingOrder.source = this.bookingOrderDetail.value.source;
    this.bookingOrder.destination = this.bookingOrderDetail.value.destination;
    
    this.bookingOrderService.addOrder(this.bookingOrder).subscribe(res=>{
        console.log(res);
        
    },err=>{
        console.log(err);
    });
  }
    /*deleteOrder(bookingOrder : BookingOrder) {

      this.bookingOrderService.deleteOrder(bookingOrder).subscribe(res=>{
        console.log(res);
      },err => {
        console.log(err);
      });

    } */

  

    
  



 
  



}
