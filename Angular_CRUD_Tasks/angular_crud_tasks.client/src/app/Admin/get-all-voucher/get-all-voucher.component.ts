import { Component } from '@angular/core';
import { AllServiceService } from '../../../all-service.service';

@Component({
  selector: 'app-get-all-voucher',
  templateUrl: './get-all-voucher.component.html',
  styleUrl: './get-all-voucher.component.css'
})
export class GetAllVoucherComponent {

  Voucher: any

  constructor(private _ser: AllServiceService) { }


  ngOnInit() {

    this.getAllData();
  }



  getAllData() {

    this._ser.GetAllVoucher().subscribe(data => {

      this.Voucher = data;

    })

  }




    DeleteVoucher(id: number) {
      if (confirm("Are you sure you want to delete this voucher?")) {
        this._ser.DeleteVoucher(id).subscribe(() => {
          alert("Voucher deleted successfully!");
          location.reload(); 
        }, error => {
          console.error("Error deleting voucher:", error);
        });
      }
    }

  

}
