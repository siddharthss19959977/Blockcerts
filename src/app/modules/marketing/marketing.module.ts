import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing/marketing.component';
import { ViewComponent } from './view/view.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { marketingrouter } from './marketing.router';


@NgModule({
  declarations: [
    MarketingComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    marketingrouter,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule
  ]
})


export class MarketingModule { }
