import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { MarketingComponent } from "./marketing/marketing.component";


const marketingRoutes:Routes=[
    {path:'',component:MarketingComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
    imports:[RouterModule.forChild(marketingRoutes)],
    exports:[RouterModule]
})


export class marketingrouter{}