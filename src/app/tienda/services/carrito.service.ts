import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/tienda.interfaces';

@Injectable()
export class CarritoService {
  private carrito: Producto[] = [];

  constructor() {
    this.cargarCarritoDesdeLocalStorage();
  }

  private cargarCarritoDesdeLocalStorage() {
    const localCarrito = localStorage.getItem('carrito');
    this.carrito = localCarrito ? JSON.parse(localCarrito) : [];
  }

  get currentCart(): Producto[] {
    return this.carrito;
  }

  addCart(producto: Producto): void {
    const hasProduct = this.carrito.some((item) => item.id === producto.id);

    if (hasProduct) {
      this.carrito = this.carrito.map((item) =>
        item.id === producto.id
          ? { ...item, unidades: item.unidades! + 1 }
          : item
      );
    } else {
      this.carrito.push({ ...producto, unidades: 1 });
    }

    this.actualizarLocalStorage();
  }

  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.price * item.unidades!, 0);
  }

  removeItemCart(producto: Producto): void {
    this.carrito = this.carrito.filter((item) => item.id !== producto.id);
    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}

