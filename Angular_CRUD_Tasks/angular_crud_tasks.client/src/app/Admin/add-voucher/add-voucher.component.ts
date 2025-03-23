import { Component } from '@angular/core';
import { AllServiceService } from '../../../all-service.service';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {


  constructor(private _ser: AllServiceService) { }







  Add_Voucher(data: any)
  {

    this._ser.PostVoucher(data).subscribe(() => {

      alert("Data added successfully!");

    })

  }
}
