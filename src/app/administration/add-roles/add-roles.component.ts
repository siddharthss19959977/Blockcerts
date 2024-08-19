import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})


export class AddRolesComponent {
  contactForm!: FormGroup;

  constructor(public dialog: MatDialog,private formbuilder: FormBuilder) {}

  ngOnInit(): void
  {
    this.contactForm = this.formbuilder.group({
      Name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      Description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      BasedOn: ['',Validators.required]
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  onSubmit(){
    console.log(this.contactForm.getRawValue());
  }
}
