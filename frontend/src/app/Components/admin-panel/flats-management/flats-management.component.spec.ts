import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsManagementComponent } from './flats-management.component';

describe('FlatsManagementComponent', () => {
  let component: FlatsManagementComponent;
  let fixture: ComponentFixture<FlatsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
