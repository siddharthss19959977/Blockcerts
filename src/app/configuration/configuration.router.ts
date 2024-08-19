import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ConfigurationComponent } from "./configuration/configuration.component";


const  configurationRoutes:Routes=[
    {path:'',component:ConfigurationComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
    imports:[RouterModule.forChild(configurationRoutes)],
    exports:[RouterModule]
})


export class configurationrouter{}