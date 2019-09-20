import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../_services';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-hang-hoa',
  templateUrl: './edit-hang-hoa.component.html',
  styleUrls: ['./edit-hang-hoa.component.css']
})
export class EditHangHoaComponent implements OnInit {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private modalService: ModalService, private route: ActivatedRoute, public router: Router) { }
  id: number;
  sub: any;
  view=true;
  txtTenHH;
  ctHangHoa;
  edit=false;
  host='https://banhang-api.herokuapp.com';
  // host='http://localhost:50479';
  actionButtonLabel: string = 'Đóng';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  kq;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      if(this.id==0)
        this.view=false
      else
        this.view=true;
    });
    this.httpClient.get(this.host + '/api/hanghoa/'+this.id).subscribe((data) => {
      this.ctHangHoa = data;
      this.txtTenHH=this.ctHangHoa.teN_HH;
      console.log(this.ctHangHoa);
    });
  }
  createAdd(){
    this.txtTenHH=null;
    this.view=false;
  }
  createEdit(){
    this.view=false;
    this.edit=true;
  }
  cancelEdit(){
    this.view=true;
    this.edit=false;
    this.txtTenHH=this.ctHangHoa.teN_HH;
  }
  addHangHoa() {
    this.httpClient.post(this.host + '/api/hanghoa', JSON.parse('{"ma_hh":"'+'1'+'",'+
                                                          '"ten_hh":"'+this.txtTenHH+'"}'),  {responseType: 'text'}).subscribe((data) => {
      // console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.router.navigate(['QLDanhMuc']);}
    });
  }
  editHangHoa() {
    this.httpClient.put(this.host + '/api/hanghoa/'+this.id, JSON.parse('{"hanghoa_id":"'+this.id+'",'+
                                                                '"ten_hh":"'+this.txtTenHH+'"}'),  {responseType: 'text'}).subscribe(
    data => {
      // console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.router.navigate(['QLDanhMuc']);}
    });
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.kq, this.action ? this.actionButtonLabel : undefined, config);
  }
}
