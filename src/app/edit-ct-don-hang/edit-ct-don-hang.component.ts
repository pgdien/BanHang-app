import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../_services';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-ct-don-hang',
  templateUrl: './edit-ct-don-hang.component.html',
  styleUrls: ['./edit-ct-don-hang.component.css']
})
export class EditCTDonHangComponent implements OnInit {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private route: ActivatedRoute, public router: Router, private modalService: ModalService) { }
  host='https://banhang-api.herokuapp.com';
  // host='https://localhost:44332';
  idCT: number;
  idDH: number;
  sub: any;
  ct_DonHang;
  list_hangHoa;
  load=false;
  edit=false;
  view=true;

  txtHH_id: number;
  txtDonGia: number;
  txtSoLuong: number;
  txtTongTien: number;
  txtThucThu: number;
  txtCongThem: number;
  txtGhichu: string;

  actionButtonLabel: string = 'Đóng';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  kq;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idCT = +params['idCT'];
      this.idDH = +params['idDH'];
      if(this.idCT==0)
        this.view=false
      else
        this.view=true;
      console.log(this.idCT+'|'+this.idDH);
    });
    this.txtDonGia=0;
    this.txtSoLuong=0;
    this.txtTongTien=0;
    this.txtThucThu=0;
    this.txtCongThem=0;
    
    this.load=true;
    this.httpClient.get(this.host + '/api/hanghoa/').subscribe((data) => {
      this.list_hangHoa = data;
      console.log(this.list_hangHoa);
    });
    if(this.idCT != 0){
      this.httpClient.get(this.host + '/api/CT_DonHang/'+this.idCT).subscribe((data) => {
        this.ct_DonHang = data;
        this.txtHH_id=this.ct_DonHang.hanghoA_ID;
        this.txtDonGia=this.ct_DonHang.dongia;
        this.txtSoLuong=this.ct_DonHang.soluong;
        this.txtTongTien=this.ct_DonHang.tongtien;
        this.txtThucThu=this.ct_DonHang.thucthu;
        this.txtCongThem=this.ct_DonHang.tieN_CONGTHEM;
        this.txtGhichu=this.ct_DonHang.ghichu;
        console.log(this.ct_DonHang);
      });
    }
  }
  tinhTong(){
    this.txtTongTien=this.txtDonGia*this.txtSoLuong;
    console.log(this.txtDonGia+'|'+this.txtSoLuong);
  }
  createAdd(){
    this.txtHH_id=null;
    this.txtDonGia=0;
    this.txtSoLuong=0;
    this.txtTongTien=0;
    this.txtThucThu=0;
    this.txtCongThem=0;
    this.txtGhichu= null;
    this.view=false;
  }
  createEdit(){
    this.view=false;
    this.edit=true;
  }
  cancelEdit(){
    this.view=true;
    this.edit=false;
    // this.txtTenHH=this.ctHangHoa.teN_HH;
  }
  addTC_HangHoa() {
    const x=JSON.parse('{"ctdH_CHA_ID":"'+null+'",'+
    '"donhanG_ID":"'+this.idDH+'",'+
    '"hanghoA_ID":"'+this.txtHH_id+'",'+
    '"dongia":"'+this.txtDonGia+'",'+
    '"soluong":"'+this.txtSoLuong+'",'+
    '"tongtien":"'+this.txtTongTien+'",'+
    '"thucthu":"'+this.txtThucThu+'",'+
    '"tieN_CONGTHEM":"'+this.txtCongThem+'",'+
    '"ghichu":"'+this.txtGhichu+'"}');
    console.log(x);
    this.httpClient.post(this.host + '/api/CT_DonHang', JSON.parse('{"ctdH_ID":'+this.idCT+
                                                                  ',"ctdH_CHA_ID":'+0+
                                                                  ',"donhanG_ID":'+this.idDH+
                                                                  ',"hanghoA_ID":'+this.txtHH_id+
                                                                  ',"dongia":'+this.txtDonGia+
                                                                  ',"soluong":'+this.txtSoLuong+
                                                                  ',"tongtien":'+this.txtTongTien+
                                                                  ',"thucthu":'+this.txtThucThu+
                                                                  ',"tieN_CONGTHEM":'+this.txtCongThem+
                                                                  ',"ghichu":"'+this.txtGhichu+'"}'),  
                                                              {responseType: 'text'}).subscribe((data) => {
      // console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.router.navigate(['/CTDonHang',this.idDH]);}
    });
  }
  editTC_HangHoa() {
    this.httpClient.put(this.host + '/api/CT_DonHang/'+this.idCT, JSON.parse('{"ctdH_ID":'+this.idCT+
                                                                             ',"ctdH_CHA_ID":'+0+
                                                                             ',"donhanG_ID":'+this.idDH+
                                                                             ',"hanghoA_ID":'+this.txtHH_id+
                                                                             ',"dongia":'+this.txtDonGia+
                                                                             ',"soluong":'+this.txtSoLuong+
                                                                             ',"tongtien":'+this.txtTongTien+
                                                                             ',"thucthu":'+this.txtThucThu+
                                                                             ',"tieN_CONGTHEM":'+this.txtCongThem+
                                                                             ',"ghichu":"'+this.txtGhichu+'"}'),  {responseType: 'text'}).subscribe(
    data => {
      // console.log(data);
      this.kq= data;
      this.openSnackBar();
      if(data=='Thành công'){this.router.navigate(['/CTDonHang',this.idDH]);}
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
