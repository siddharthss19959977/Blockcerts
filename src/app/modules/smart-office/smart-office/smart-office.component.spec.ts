import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartOfficeComponent } from './smart-office.component';

describe('SmartOfficeComponent', () => {
  let component: SmartOfficeComponent;
  let fixture: ComponentFixture<SmartOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartOfficeComponent]
    });
    fixture = TestBed.createComponent(SmartOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
