import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Producto } from '../interfaces/tienda.interfaces';

@Injectable()
export class TiendaService {
  baseUrl: string = environment.baseUrl;

  productos: Producto[] = []

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/products`);
  }

  getProductById(id: number): Observable<Producto>  {
    return this.http.get<Producto>(`${this.baseUrl}/products/${id}`);
  }
}
