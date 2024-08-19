import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration/administration.component';
import { ViewComponent } from './view/view.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormsModule } from '@angular/forms';
import { AddWorkspaceComponent } from './add-workspace/add-workspace.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { administrationrouter } from './administration.router';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    ViewComponent,
    AddWorkspaceComponent,
    AddRolesComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    administrationrouter,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})


export class AdministrationModule { }
