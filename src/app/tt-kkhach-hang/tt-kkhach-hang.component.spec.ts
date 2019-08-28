import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtKKhachHangComponent } from './tt-kkhach-hang.component';

describe('TtKKhachHangComponent', () => {
  let component: TtKKhachHangComponent;
  let fixture: ComponentFixture<TtKKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtKKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtKKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
