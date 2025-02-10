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
  loading: boolean = true;

  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.tiendaService.productosActualizados.subscribe(productos => {
      this.productos = productos;
    });
  }

  obtenerProductos(): void {
    this.loading = true;
    this.tiendaService.getProducts().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
        this.loading = false;
      }
    });
  }
}
