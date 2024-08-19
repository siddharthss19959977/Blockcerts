import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { ViewComponent } from './view/view.component';
import { NoteComponent } from './note/note.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { notesrouter } from './notes.router';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NotesComponent,
    ViewComponent,
    NoteComponent,
    NotebooksComponent
  ],
  imports: [
    CommonModule,
    notesrouter,
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ]
})


export class NotesModule {}