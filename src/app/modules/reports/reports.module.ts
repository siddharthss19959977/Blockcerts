import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})


export class ReportsModule { }
