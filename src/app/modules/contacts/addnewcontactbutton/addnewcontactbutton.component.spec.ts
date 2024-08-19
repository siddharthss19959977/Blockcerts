import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcontactbuttonComponent } from './addnewcontactbutton.component';

describe('AddnewcontactbuttonComponent', () => {
  let component: AddnewcontactbuttonComponent;
  let fixture: ComponentFixture<AddnewcontactbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewcontactbuttonComponent]
    });
    fixture = TestBed.createComponent(AddnewcontactbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
