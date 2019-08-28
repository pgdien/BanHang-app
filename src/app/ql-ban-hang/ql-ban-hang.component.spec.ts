import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlBanHangComponent } from './ql-ban-hang.component';

describe('QlBanHangComponent', () => {
  let component: QlBanHangComponent;
  let fixture: ComponentFixture<QlBanHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlBanHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlBanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
