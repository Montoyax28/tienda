import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../interfaces/tienda.interfaces';

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css'],
})
export class DetalleCarritoComponent implements OnInit {


  constructor(private readonly service: CarritoService) {}

  ngOnInit(): void {

  }

  get stateCart(){
    return this.service.currentCart
  }

  deleteProduct(producto: Producto):void {
    this.service.removeItemCart(producto)
  }
}
