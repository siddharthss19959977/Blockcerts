import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { FilesComponent } from "./files/files.component";


const filesRoutes:Routes=[
    {path:'',component:FilesComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(filesRoutes)],
  exports: [RouterModule]
})


export class filesrouter{}