import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { QLDanhMucModule } from './qldanh-muc/qldanh-muc.module';
import { HomeComponent } from './home/home.component';
import { QLDanhMucComponent } from './qldanh-muc/qldanh-muc.component';
import { TtKKhachHangComponent } from './tt-kkhach-hang/tt-kkhach-hang.component';
import { QlNhapHangComponent } from './ql-nhap-hang/ql-nhap-hang.component';
import { QlBanHangComponent } from './ql-ban-hang/ql-ban-hang.component';
import { EditHangHoaComponent } from './edit-hang-hoa/edit-hang-hoa.component';
import { EditTTKhachHangComponent } from './edit-tt-khach-hang/edit-tt-khach-hang.component';
import { EditDonHangComponent } from './edit-don-hang/edit-don-hang.component';
import { EditCTDonHangComponent } from './edit-ct-don-hang/edit-ct-don-hang.component';
import { CTDonHangComponent } from './ct-don-hang/ct-don-hang.component';
import { logging } from 'protractor';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { ModalComponent } from './_components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSwipeToDeleteModule } from 'ng-swipe-to-delete';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'QLDanhMuc', component: QLDanhMucComponent },
  { path: 'TTKhachHang', component: TtKKhachHangComponent },
  { path: 'QLNhapHang', component: QlNhapHangComponent },
  { path: 'QLBanHang', component: QlBanHangComponent },
  { path: 'editHangHoa/:id', component: EditHangHoaComponent, pathMatch: 'full' },
  { path: 'editTTKhachHang/:id', component: EditTTKhachHangComponent },
  { path: 'editDonHang/:id', component: EditDonHangComponent },
  { path: 'editCTDonHang/:id', component: EditCTDonHangComponent },
  { path: 'CTDonHang/:id', component: CTDonHangComponent }
];

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    QLDanhMucComponent,
    HomeComponent,
    TtKKhachHangComponent,
    QlNhapHangComponent,
    QlBanHangComponent,
    LoginComponent,
    ModalComponent,
    EditHangHoaComponent,
    EditTTKhachHangComponent,
    EditDonHangComponent,
    EditCTDonHangComponent,
    CTDonHangComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // QLDanhMucModule,

    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    NgSwipeToDeleteModule,
  ],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig 
  }], // use our custom hammerjs config,
  bootstrap: [AppComponent]
})
export class AppModule { }
