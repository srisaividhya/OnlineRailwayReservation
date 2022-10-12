import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrainListComponent } from './train-list/train-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { UpiComponent } from './upi/upi.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeSliderComponent,
    NavbarComponent,
    TrainListComponent,
    AdminComponent,
    TicketBookingComponent,
    PaymentComponent,
    UpiComponent,
    CreditcardComponent,
    CancelBookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
