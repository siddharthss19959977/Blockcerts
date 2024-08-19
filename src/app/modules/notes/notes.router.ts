import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { NotesComponent } from "./notes/notes.component";


const notesRoutes:Routes=[
    {path:'',component:NotesComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule]
})


export class notesrouter{}