import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartOfficeComponent } from './smart-office/smart-office.component';
import { ViewComponent } from './view/view.component';
import { MatTableModule } from '@angular/material/table';
import { smartofficerouter } from './smart-office.router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    SmartOfficeComponent,
    ViewComponent,
    AddActivityComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    FormsModule,
    smartofficerouter,
    MatExpansionModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    EditorModule
  ],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'
    }
  ]
})


export class SmartOfficeModule { }
