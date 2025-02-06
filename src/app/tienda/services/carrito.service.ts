import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/tienda.interfaces';

@Injectable()
export class CarritoService {
  private carrito: Producto[] = [];
  total: number = 0;

  get currentCart() {
    const localCarrito = localStorage.getItem('carrito');

    this.carrito = !this.carrito.length
        ? JSON.parse(localStorage.getItem('carrito')!)
        : this.carrito;
    return this.carrito;
  }


  addCart(producto: Producto): void {
    const hasProduct = this.carrito.some((item) => item.id === producto.id); /////////////////////////////////////

    if (hasProduct) {
      this.carrito = this.carrito.map((item) =>
        item.id === producto.id
      ? { ...item, unidades: item.unidades! + 1 }
      : { ...item }
    );
    console.log(this.carrito);
    return
    }

    /*    this.total += producto.price;
    console.log(this.total);*/

    this.carrito.push({ ...producto, unidades: 1 });
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  getTotal(): number {
    return this.total;
  }

  removeItemCart(producto: Producto): void {
    this.carrito = this.carrito.filter((item) => item.id !== producto.id);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
