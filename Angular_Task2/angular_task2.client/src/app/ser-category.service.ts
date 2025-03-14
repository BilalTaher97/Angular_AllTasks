import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerCategoryService {

  constructor(private Url: HttpClient) {

  }

  getData() {
    return this.Url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getProduct() {

    return this.Url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  
}
