import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Producto } from '../interfaces/tienda.interfaces';

@Injectable()
export class TiendaService {
  baseUrl: string = environment.baseUrl;
  private productosSubject = new BehaviorSubject<Producto[]>(this.obtenerProductosLocales());

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/products`).pipe(
      map(productosApi => [...productosApi, ...this.obtenerProductosLocales()]),
      tap(productosCombinados => this.productosSubject.next(productosCombinados))
    );
  }

  getProductById(id: number): Observable<Producto> {
    const productoLocal = this.obtenerProductosLocales().find(p => p.id === id);
    if (productoLocal) {
      return new Observable(observer => {
        observer.next(productoLocal);
        observer.complete();
      });
    }
    return this.http.get<Producto>(`${this.baseUrl}/products/${id}`);
  }

  guardarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}/products`, producto).pipe(
      tap(nuevoProducto => {
        this.guardarProductoLocalmente(nuevoProducto);
        this.productosSubject.next([...this.productosSubject.value, nuevoProducto]);
      })
    );
  }

  get productosActualizados(): Observable<Producto[]> {
    return this.productosSubject.asObservable();
  }

  private guardarProductoLocalmente(producto: Producto): void {
    const productosGuardados = this.obtenerProductosLocales();
    productosGuardados.push(producto);
    localStorage.setItem('productos', JSON.stringify(productosGuardados));
  }

  private obtenerProductosLocales(): Producto[] {
    return JSON.parse(localStorage.getItem('productos') || '[]');
  }
}
