import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalService } from '../_services';

@Component({
  selector: 'app-ct-don-hang',
  templateUrl: './ct-don-hang.component.html',
  styleUrls: ['./ct-don-hang.component.css']
})
export class CTDonHangComponent implements OnInit {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private route: ActivatedRoute, public router: Router, private modalService: ModalService) { }

  // host='https://banhang-api.herokuapp.com';
  host='http://localhost:50479';
  id: number;
  sub: any;
  DonHang=null;
  id_ct_DH;
  load=false;
  kq;
  evtSwipe=null;
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  actionButtonLabel: string = 'Đóng';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.load=true;
    this.httpClient.get(this.host + '/api/donhang/'+this.id).subscribe((data) => {
      this.DonHang = data;
      this.httpClient.get(this.host + '/api/khachhang/'+this.DonHang.khachhanG_ID).subscribe((data1) => {
        this.DonHang.khachhang = data1;
      });
      this.DonHang.lisT_CT_HD=[];
      this.httpClient.get(this.host + '/api/CT_DonHang/for_hd/'+this.DonHang.donhanG_ID).subscribe((data2) => {
        this.DonHang.lisT_CT_HD = data2;
      console.log(this.DonHang);
      this.load=false;
      });
    });
  }
  
  onSwipe(evt, id) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    console.log(`${x} ${y} | ${id}`);
    this.evtSwipe=x;
    this.id_ct_DH=id;
  }
  
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.kq, this.action ? this.actionButtonLabel : undefined, config);
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
