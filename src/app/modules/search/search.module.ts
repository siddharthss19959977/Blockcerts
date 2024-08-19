import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FilesComponent } from './files/files.component';
import { NotesComponent } from './notes/notes.component';
import { searchrouter } from './search.router';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SearchComponent,
    ViewComponent,
    ActivitiesComponent,
    ContactsComponent,
    FilesComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    searchrouter,
    MatTabsModule
  ]
})


export class SearchModule { }
