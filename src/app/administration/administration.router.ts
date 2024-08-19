import { NgModule }  from"@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { AdministrationComponent } from "./administration/administration.component";


const administrationRoutes:Routes=[
    {path:'',component:AdministrationComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
    imports:[RouterModule.forChild(administrationRoutes)],
    exports:[RouterModule]
})


export class administrationrouter{}