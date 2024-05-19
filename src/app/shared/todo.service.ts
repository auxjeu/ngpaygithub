import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from "@angular/forms";
import { ToDoDetail } from './todo.model';

@Injectable({
    providedIn: 'root'
  })

export class PaymentDetailService {
    url: string = 'http://localhost:5287/api'
    list: ToDoDetail[] = [];
    formData: ToDoDetail = new ToDoDetail()
    formSubmitted: boolean = false;
    constructor(private http: HttpClient) { }

postTodoDetail() {
    return this.http.post(this.url, "ok")
  }

}