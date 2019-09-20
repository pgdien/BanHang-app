import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDonHangComponent } from './edit-don-hang.component';

describe('EditDonHangComponent', () => {
  let component: EditDonHangComponent;
  let fixture: ComponentFixture<EditDonHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
