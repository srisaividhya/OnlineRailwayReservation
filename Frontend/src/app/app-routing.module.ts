import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { TrainListComponent } from './train-list/train-list.component';

const routes: Routes = [
  {path: 'home-slider', component : HomeSliderComponent  },
  {path: 'train-list', component : TrainListComponent},
  {path:'',redirectTo:'home-slider', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
