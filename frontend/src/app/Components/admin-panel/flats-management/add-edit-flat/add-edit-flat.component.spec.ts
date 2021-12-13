import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFlatComponent } from './add-edit-flat.component';

describe('AddEditFlatComponent', () => {
  let component: AddEditFlatComponent;
  let fixture: ComponentFixture<AddEditFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
