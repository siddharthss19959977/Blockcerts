import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { AddWorkspaceComponent } from '../add-workspace/add-workspace.component';
import { AddRolesComponent } from '../add-roles/add-roles.component';
import { AddUserComponent } from '../add-user/add-user.component';


export interface WorkspaceElement{
  //for add workspace
  Name:string;
  Description:string;
}

export interface RoleElement{
  //for add roles
  Name:string;
  Description:string;
  BasedOn:string;
}

export interface UserElement{
  //for add user
  LoginName:string;
  Password:string;
  ConfirmPassword:string;
  Role:string;
  Workspace:string;
}

const WORKPSACE_DATA: WorkspaceElement[] = [
  {Name:'Hydrogen',Description:'H'},
  {Name:'Helium',Description:'He'},
  {Name:'Lithium',Description:'Li'}
];

const ROLE_DATA: RoleElement[] = [
  {Name:'Hydrogen',Description:'H',BasedOn:'1'},
  {Name:'Helium',Description:'He',BasedOn:'2'},
  {Name:'Lithium',Description:'Li',BasedOn:'3'}
];

const USER_DATA: UserElement[] = [
  {LoginName:'',Password:'',ConfirmPassword:'',Role:'',Workspace:''},
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent {
  constructor(public dialog: MatDialog) {}

  dataSource = new MatTableDataSource<WorkspaceElement>(WORKPSACE_DATA);
  displayedColumns: string[] = ['Name', 'Description'];

  dataSource2 = new MatTableDataSource<RoleElement>(ROLE_DATA);
  displayedColumns2: string[] = ['Name', 'Description','BasedOn'];

  dataSource3=new MatTableDataSource<UserElement>(USER_DATA);
  displayedColumns3: string[]=['position','LoginName','Password','ConfirmPassword','Role','Workspace'];

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource2.paginator = this.paginator;
      this.dataSource3.paginator = this.paginator;
    }

    openWorkspace(): void {
        const dialogRef = this.dialog.open(AddWorkspaceComponent , {
          //data: {name: this.name, animal: this.animal},
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.animal = result;
        });
      }

      openRoles(): void {
          const dialogRef1 = this.dialog.open(AddRolesComponent , {
            //data: {name: this.name, animal: this.animal},
          });
    
          dialogRef1.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
          });
      }

      openUser(): void {
        const dialogRef2 = this.dialog.open(AddUserComponent , {
          //data: {name: this.name, animal: this.animal},
        });
  
        dialogRef2.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.animal = result;
        });
      }
}
