import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { ViewComponent } from './view/view.component';
import { calendarrouter } from './calendar.router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';


@NgModule({
  declarations: [
    CalendarComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    calendarrouter
  ]
})


export class CalendarModule { }
