import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { TeamComponent } from "./team/team.component";


const teamRoutes:Routes=[
    {path:'', component:TeamComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(teamRoutes)],
    exports:[RouterModule]
})


export class teamrouter{}