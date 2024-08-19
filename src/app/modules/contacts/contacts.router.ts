import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ContactsComponent } from "./contacts/contacts.component";


const ContactsRoutes:Routes=[
    {path:'',component:ContactsComponent,children:[{path:'view',component:ViewComponent}]}
];


@NgModule({
    imports:[RouterModule.forChild(ContactsRoutes)],
    exports:[RouterModule]
})


export class contactsrouter{}