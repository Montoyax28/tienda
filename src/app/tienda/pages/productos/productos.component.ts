import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Producto } from '../../interfaces/tienda.interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
    loading = true;

    constructor(private readonly service: TiendaService) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getProducts().subscribe((productos) => {
      this.productos = productos;
      this.service.productos = productos;
      if (productos.length > 0) this.loading = false;
    });
  }

}
