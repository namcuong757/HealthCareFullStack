import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonViewComponent } from './person-view/person-view.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path: "personView", component: PersonViewComponent},
  {path: "appointment", component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
