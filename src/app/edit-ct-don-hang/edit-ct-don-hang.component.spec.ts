import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCTDonHangComponent } from './edit-ct-don-hang.component';

describe('EditCTDonHangComponent', () => {
  let component: EditCTDonHangComponent;
  let fixture: ComponentFixture<EditCTDonHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCTDonHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCTDonHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
