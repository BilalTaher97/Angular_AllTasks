import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private Url: HttpClient) { }



  GetAllVoucher() {

    return this.Url.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");

  }
  GetVoucherById(Id:number) {

    return this.Url.get<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${Id}`);

  }

  PostVoucher(data:any) {

    return this.Url.post<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data);

  }


  EditVoucher(Id: any,Data:any) {

    return this.Url.put<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${Id}`, Data);

  }


  DeleteVoucher(Id: any) {

    return this.Url.delete<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${Id}`);

  }

}
