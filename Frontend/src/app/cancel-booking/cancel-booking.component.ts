import { Component, OnInit } from '@angular/core';
import { BookingOrder } from '../model/booking-order';
import { BookingOrderService } from '../service/booking-order.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }


  
}
