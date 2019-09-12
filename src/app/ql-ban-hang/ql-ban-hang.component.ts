import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ModalService } from '../_services';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-ql-ban-hang',
  templateUrl: './ql-ban-hang.component.html',
  styleUrls: ['./ql-ban-hang.component.css']
})

export class QlBanHangComponent implements OnInit {
  host='https://banhang-api.herokuapp.com';
  // host='https://localhost:44332';
  
  themDonHang=false;
  listDonHang = null;
  idDonhang=null;
  listCT_DonHang = null;
  txtGhiChu_DonHang=null;
  txtMaDonHang=null;
  stt='Thêm đơn hàng'

  listKhachHang=null;
  idKhachHang=null;
  kq=null;
  load=false;

  evtSwipe=null;

  actionButtonLabel: string = 'Đóng';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private modalService: ModalService) { }

  ngOnInit() {
    this.loadData();
    this.httpClient.get(this.host + '/api/khachhang').subscribe((data) => {
      this.listKhachHang = data;
      // console.log(data);
    });
  }

  loadData(){
    this.load=true;
    this.httpClient.get(this.host + '/api/donhang/xuat').subscribe((data) => {
      this.listDonHang = data;
      this.listDonHang.forEach(childObj=> {
        this.httpClient.get(this.host + '/api/khachhang/'+childObj.khachhanG_ID).subscribe((data1) => {
          childObj.khachhang = data1;
        });
        this.httpClient.get(this.host + '/api/loai_donhang/'+childObj.loaidH_ID).subscribe((data2) => {
          childObj.loaiDH = data2;
        });
        this.load=false;
     })
      console.log(this.listDonHang);
    });
    this.httpClient.get(this.host + '/api/CT_DonHang').subscribe((data) => {
      this.listCT_DonHang = data;
    });
  }
  
  createAddDonHang(){
    this.idDonhang=null;
    this.stt='Thêm đơn hàng';
    this.txtGhiChu_DonHang=null;
  }
  createEditDonHang(id){
    this.stt='Sửa đơn hàng';
    this.idDonhang=id;
    // this.listHangHoa.forEach(childObj=> {
    //   if(childObj.hanghoA_ID == id){
    //     this.txtTenHH=childObj.teN_HH;
    //   }
    // })
  }
  createDelDonHang(id, ten){
    console.log(id|ten);
    this.idDonhang=id;
    this.txtMaDonHang=ten;
  }
  addDonHang() {
    console.log(this.idKhachHang);
    this.httpClient.post(this.host + '/api/donhang', JSON.parse('{"khachhang_id":"'+this.idKhachHang+'",'+
                                                            '"ngay_lap":"'+formatDate(new Date(), 'MM/dd/yyyy', 'en')+'",'+
                                                            '"loaidh_id":"'+'2'+'",'+
                                                            '"ttdh_id":"'+'1'+'",'+
                                                            '"ma_dh":"'+'10'+'",'+
                                                            '"stt":"'+'10'+'",'+
                                                            '"ghichu":"'+this.txtGhiChu_DonHang+'"}'),  {responseType: 'text'}).subscribe((data) => {
        // console.log(data);
        this.kq= data;
        this.openSnackBar();
        if(data=='Thành công'){this.loadData();}
      });
  }
  delDonHang() {
    this.httpClient.delete(this.host + '/api/donhang/'+this.idDonhang,  {responseType: 'text'}).subscribe(
      data => {
        // console.log(data);
        this.kq= data;
        this.openSnackBar();
        if(data=='Thành công'){this.loadData();}
      });
  }

  onSwipe(evt, id) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    // console.log(`${x} ${y} | ${id}`);
    this.evtSwipe=x;
    this.idDonhang=id;
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
