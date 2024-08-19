import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-workspace',
  templateUrl: './add-workspace.component.html',
  styleUrls: ['./add-workspace.component.scss']
})


export class AddWorkspaceComponent {
  contactForm!: FormGroup;

  constructor(public dialog: MatDialog,private formbuilder: FormBuilder) {}

  ngOnInit(): void
  {
    this.contactForm = this.formbuilder.group({
      Name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      Description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  onSubmit(){
    console.log(this.contactForm.getRawValue());
  }
}
