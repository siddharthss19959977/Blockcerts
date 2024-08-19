import { NgModule }  from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { CalendarComponent } from "./calendar/calendar.component";


const calendarRoutes:Routes=[
    {path:'', component:CalendarComponent,children:[
        {path:'view',component:ViewComponent}
    ]},
];


@NgModule({
    imports:[RouterModule.forChild(calendarRoutes)],
    exports:[RouterModule]
})


export class calendarrouter{}