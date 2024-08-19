import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


//Other Imports
import { ViewComponent } from "./view/view.component";
import { ChatComponent } from "./chat/chat.component";


const chatRoutes:Routes=[
    {path:'',component:ChatComponent,children:[{path:'view',component:ViewComponent}]},
];


@NgModule({
    imports: [RouterModule.forChild(chatRoutes)],
    exports:[RouterModule]
})


export class chatrouter{}