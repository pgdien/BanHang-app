import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlNhapHangComponent } from './ql-nhap-hang.component';

describe('QlNhapHangComponent', () => {
  let component: QlNhapHangComponent;
  let fixture: ComponentFixture<QlNhapHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlNhapHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlNhapHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
