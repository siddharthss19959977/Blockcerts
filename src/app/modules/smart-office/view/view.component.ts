import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddActivityComponent } from '../add-activity/add-activity.component';


export interface ActivityElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ACTIVITY_DATA: ActivityElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent {
  dataSource = new MatTableDataSource<ActivityElement>(ACTIVITY_DATA);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;
  constructor(public dialog: MatDialog){}
    ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}

openActivity(): void {
  const dialogRef = this.dialog.open(AddActivityComponent, {});

  dialogRef.afterClosed().subscribe(result=> {
    console.log('This workspace dialog was closed');
  });
}
}
