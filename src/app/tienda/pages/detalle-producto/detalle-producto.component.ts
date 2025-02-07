import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('imageZoom') imageZoom!: ElementRef<HTMLImageElement>;

  producto!: Producto;
  loading = true;
  total: number = 0;
  zoomActive = false;
  zoomStyle = {}; // Estilos dinámicos para el zoom

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

  addToCart(producto: Producto): void {
    this.carritoService.addCart(producto);
    this.total = this.carritoService.getTotal();
  }

  // Función para manejar el zoom
  onZoom(event: MouseEvent): void {
    if (!this.imageZoom) return;

    this.zoomActive = true;

    const img = this.imageZoom.nativeElement;
    const rect = img.getBoundingClientRect();
    let x = event.clientX - rect.left; // Posición relativa en X
    let y = event.clientY - rect.top; // Posición relativa en Y
    const width = rect.width;
    const height = rect.height;
    const zoomFactor = 2;
    const lensSize = 80;
    const halfLens = lensSize / 2;

    x = Math.max(halfLens, Math.min(x, width - halfLens));
    y = Math.max(halfLens, Math.min(y, height - halfLens));

    // Ajuste de la lupa
    this.zoomStyle = {
      left: `${x - halfLens}px`,
      top: `${y - halfLens}px`,
      backgroundImage: `url(${this.producto.image})`,
      backgroundSize: `${width * zoomFactor}px ${height *zoomFactor}px`,
       backgroundPosition: `-${(x * zoomFactor) - halfLens}px -${(y * zoomFactor) - halfLens}px`
    };
  }

  // Ocultar lupa cuando el mouse sale de la imagen
  resetZoom(): void {
    this.zoomActive = false;
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}
