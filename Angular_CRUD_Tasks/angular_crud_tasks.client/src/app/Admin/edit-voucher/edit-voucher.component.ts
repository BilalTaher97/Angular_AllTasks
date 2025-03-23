import { Component } from '@angular/core';
import { AllServiceService } from '../../../all-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {

  Id: number = 0;
  GetData: any;
  constructor(private _ser: AllServiceService, private _getID: ActivatedRoute) { }


  ngOnInit() {

    this.Id =  Number(this._getID.snapshot.paramMap.get("id"));

    this.getVoucher();

  }

  getVoucher() {

    this._ser.GetVoucherById(this.Id).subscribe(data => {

      this.GetData = data;
      console.log('Hello Iam Bilal');
    })
  }


  Edit_Voucher(Setdata: any) {

    this._ser.EditVoucher(this.Id, Setdata).subscribe(() => {


      alert('Edit Data has been successfully!');

    })

  }

}
