import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


//Other Imports
import { ViewComponent } from "./view/view.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const dashboardRoutes:Routes=[
    {path:'',component:DashboardComponent,children:[{path:'view',component:ViewComponent}]}
];


@NgModule({
    imports:[RouterModule.forChild(dashboardRoutes)],
    exports:[RouterModule]
})


export class dashboardrouter{} 