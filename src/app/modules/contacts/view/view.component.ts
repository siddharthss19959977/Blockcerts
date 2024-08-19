import { AfterViewInit,Component,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddnewcontactbuttonComponent } from '../addnewcontactbutton/addnewcontactbutton.component';


export interface PeriodicElement{
  position:string,
  FirstName:string;
  MiddleName:string;
  LastName:string;
  Email:string;
  Phone:string;
  Company:string;
  Address:string;
  City:string;
  State:string;
  Zipcode:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: '', FirstName: '', MiddleName: '', LastName: '', Email: '', Phone: '',Company: '', Address: '', City: '', State: '',Zipcode: ''},
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'FirstName', 'MiddleName', 'LastName', 'Email', 'Phone', 'Company', 'Address', 'City', 'State', 'Zipcode'];
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}
  
    ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}

openNew(): void {
  const dialogRef = this.dialog.open(AddnewcontactbuttonComponent, {
    //data: {name: this.name, animal: this.animal},
  });



  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });
}
}
