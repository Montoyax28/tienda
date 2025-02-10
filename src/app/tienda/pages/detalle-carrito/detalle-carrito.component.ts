import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../interfaces/tienda.interfaces';

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css'],
})
export class DetalleCarritoComponent implements OnInit {
  total: number = 0;

  constructor(private readonly service: CarritoService) {}

  ngOnInit(): void {
    this.actualizarTotal();
  }

  get stateCart() {
    return this.service.currentCart;
  }

  deleteProduct(producto: Producto): void {
    this.service.removeItemCart(producto);
    this.actualizarTotal();
  }

  actualizarTotal(): void {
    this.total = this.service.getTotal();
  }

  updateUnits(producto: Producto, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const cantidad = parseInt(inputElement.value, 10);

    if (cantidad > 0) {
      this.service.updateItemQuantity(producto, cantidad);
    }
  }

  get totalCartPrice(): number {
    return this.service.currentCart.reduce((total, item) => total + (item.price * item.unidades!), 0);
  }
}
