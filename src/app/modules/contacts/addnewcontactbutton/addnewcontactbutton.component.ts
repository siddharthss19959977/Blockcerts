import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addnewcontactbutton',
  templateUrl: './addnewcontactbutton.component.html',
  styleUrls: ['./addnewcontactbutton.component.scss']
})


export class AddnewcontactbuttonComponent {
  contactForm!:FormGroup;


  constructor(public dialog: MatDialog,private formbuilder: FormBuilder) { }


  closeDialog(): void {
    this.dialog.closeAll();
  }


  ngOnInit(): void
  {
    this.contactForm = this.formbuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      MiddleName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      LastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', Validators.required],
      Company: ['', Validators.required],
      Address: ['', Validators.required],
      CityorTown: ['', Validators.required],
      State: ['', Validators.required],
      Zipcode: ['', Validators.required]
    });
  }

  
  onSubmit(){
    console.log(this.contactForm.getRawValue());
  }


}
