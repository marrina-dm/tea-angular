import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {OrderType} from "../types/order.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  createOrder(data: OrderType): Observable<{ success: boolean, message?: string }> {
    return this.http.post<{ success: boolean, message?: string }>('https://testologia.ru/order-tea', data);
  }
}
