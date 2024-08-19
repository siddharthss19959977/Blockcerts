import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files/files.component';
import { ViewComponent } from './view/view.component';
import { FileComponent } from './file/file.component';
import { FoldersComponent } from './folders/folders.component';
import { filesrouter } from './files.router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FilesComponent,
    ViewComponent,
    FileComponent,
    FoldersComponent
  ],
  imports: [
    CommonModule,
    filesrouter,
    MatButtonModule,
    MatIconModule,
    MatTreeModule
  ]
})
export class FilesModule { }
