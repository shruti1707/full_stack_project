import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageproductsComponent } from './manageproducts.component';

describe('ManageproductsComponent', () => {
  let component: ManageproductsComponent;
  let fixture: ComponentFixture<ManageproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
