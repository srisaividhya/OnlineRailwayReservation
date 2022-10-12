import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingOrder } from '../model/booking-order';

@Injectable({
  providedIn: 'root'
})
export class BookingOrderService {

  


  bookingOrderURL !: string;
  deleteOrderUrl !: string;

  constructor(private http : HttpClient) { 
    
    this.bookingOrderURL = 'http://localhost:8084/orders/addOrder';
    this.deleteOrderUrl ='http://localhost:8084/orders/del/'
  }

  addOrder(bookingOrder : BookingOrder) : Observable<BookingOrder>{
    return this.http.post<BookingOrder>(this.bookingOrderURL, bookingOrder);
  }

  
  
}
