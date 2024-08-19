import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Other Imports if its a component only


const routes: Routes = [
  {path:"dashboard",loadChildren:()=>import('../app/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"chat",loadChildren:()=>import('../app/modules/chat/chat.module').then(m=>m.ChatModule)},
  {path:"team",loadChildren:()=>import('../app/modules/team/team.module').then(m=>m.TeamModule)},
  {path:"smartoffice",loadChildren:()=>import('../app/modules/smart-office/smart-office.module').then(m=>m.SmartOfficeModule)},
  {path:"calendar",loadChildren:()=>import('../app/modules/calendar/calendar.module').then(m=>m.CalendarModule)},
  {path:'contacts',loadChildren:()=>import('../app/modules/contacts/contacts.module').then(m=>m.ContactsModule)},
  {path:'files',loadChildren:()=>import('../app/modules/files/files.module').then(m=>m.FilesModule)},
  {path:'marketing',loadChildren:()=>import('../app/modules/marketing/marketing.module').then(m=>m.MarketingModule)},
  {path:'notes',loadChildren:()=>import('../app/modules/notes/notes.module').then(m=>m.NotesModule)},
  {path:'search',loadChildren:()=>import('../app/modules/search/search.module').then(m=>m.SearchModule)},
  {path:'shared',loadChildren:()=>import('../app/modules/shared/shared.module').then(m=>m.SharedModule)},
  {path:'administration',loadChildren:()=>import('../app/administration/administration.module').then(m=>m.AdministrationModule)},
  {path:'configuration',loadChildren:()=>import('../app/configuration/configuration.module').then(m=>m.ConfigurationModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
