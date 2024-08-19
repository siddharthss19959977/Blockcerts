import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { ChartsComponent } from './charts/charts.component';
import { LinksComponent } from './links/links.component';
import { dashboardrouter } from './dashboard.router';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewComponent,
    ChartsComponent,
    LinksComponent
  ],
  imports: [
    CommonModule,
    dashboardrouter
  ]
})


export class DashboardModule { }
