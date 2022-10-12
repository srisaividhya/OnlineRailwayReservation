import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { TrainListComponent } from './train-list/train-list.component';

const routes: Routes = [
  {path: '', component : HomeSliderComponent  },
  {path: 'home-slider', component : HomeSliderComponent},
  {path: 'train-list', component : TrainListComponent},
  {path: 'ticketbooking', component : TicketBookingComponent},
  {path: 'admin', component : AdminComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
