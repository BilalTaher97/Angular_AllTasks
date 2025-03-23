import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetAllVoucherComponent } from './Admin/get-all-voucher/get-all-voucher.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';

const routes: Routes = [

  {
    path: "Dashboard", component: DashboardComponent, children: [

      { path: "GetVoucher", component: GetAllVoucherComponent },
      { path: "AddVoucher", component: AddVoucherComponent },
      { path: "EditVoucher/:id", component: EditVoucherComponent }
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
