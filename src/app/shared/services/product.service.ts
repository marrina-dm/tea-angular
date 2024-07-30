import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public subjectSearch: Subject<string>;
  public searchValue: string = '';

  constructor(private http: HttpClient) {
    this.subjectSearch = new Subject<string>();
  }

  public changeSearch(search: string): void {
    this.searchValue = search;
    this.subjectSearch.next(search);
  }

  getProducts(search?: string): Observable<ProductType[]> {
    let params: string = '';
    if (search) {
      params = `?search=${search}`;
    }

    return this.http.get<ProductType[]>(environment.apiURL + 'tea' + params);
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiURL + `tea?id=${id}`);
  }
}
