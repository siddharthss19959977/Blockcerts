import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { SearchComponent } from "./search/search.component";


const  searchRoutes:Routes=[
    {path:'',component:SearchComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
    imports:[RouterModule.forChild(searchRoutes)],
    exports:[RouterModule]
})


export class searchrouter{}