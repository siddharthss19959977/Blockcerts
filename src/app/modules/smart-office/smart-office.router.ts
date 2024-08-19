import { NgModule }  from"@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { SmartOfficeComponent } from "./smart-office/smart-office.component";


const smartofficeRoutes:Routes=[
    {path:'',component:SmartOfficeComponent,children:[{path:'view',component:ViewComponent}]}
];


@NgModule({
    imports:[RouterModule.forChild(smartofficeRoutes)],
    exports:[RouterModule]
})


export class smartofficerouter{}