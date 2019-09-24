import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTDonHangComponent } from './ct-don-hang.component';

describe('CTDonHangComponent', () => {
  let component: CTDonHangComponent;
  let fixture: ComponentFixture<CTDonHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTDonHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTDonHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
