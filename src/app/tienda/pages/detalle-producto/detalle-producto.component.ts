import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../../services/tienda.service';
import { Subscription, switchMap } from 'rxjs';
import { Producto } from '../../interfaces/tienda.interfaces';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit, OnDestroy {
  producto!: Producto;
  loading = true;
  total: number = 0;

  private sub0: Subscription = new Subscription();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TiendaService,
    private readonly carritoService: CarritoService,

  ) {}

  ngOnInit(): void {
    this.sub0 = this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.service.getProductById(Number(id))))
    .subscribe((producto) => {
      this.producto = producto;
      this.loading = false;
    });
  }

  getTotal(): number {
    return this.total; // Retorna el total actual
  }
  addToCart(producto: Producto): void {
    this.carritoService.addCart(producto);
    this.total = this.carritoService.getTotal();
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}
