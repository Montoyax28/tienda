import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../../services/tienda.service';
import { Subscription, switchMap } from 'rxjs';
import { Producto } from '../../interfaces/tienda.interfaces';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit, OnDestroy {
  producto!: Producto;
  loading = true;

  private sub0: Subscription = new Subscription();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TiendaService
  ) {}

  ngOnInit(): void {
    this.sub0 = this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.service.getProductById(Number(id))))
      .subscribe((producto) => {
        console.log(producto);
        this.producto = producto;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}
