import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageordersComponent } from './manageorders.component';

describe('ManageordersComponent', () => {
  let component: ManageordersComponent;
  let fixture: ComponentFixture<ManageordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
