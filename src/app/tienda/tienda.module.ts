import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';

import { SharedModule } from '../shared/shared.module';

import { TiendaService } from './services/tienda.service';

import { ComponentsModule } from './components/components.module';
import { DetalleCarritoComponent } from './pages/detalle-carrito/detalle-carrito.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { TiendaComponent } from './tienda.component';
import { ProductosComponent } from './pages/productos/productos.component';

@NgModule({
  declarations: [
    DetalleCarritoComponent,
    DetalleProductoComponent,
    TiendaComponent,
    ProductosComponent,
  ],
  imports: [CommonModule, TiendaRoutingModule, ComponentsModule, SharedModule],
  providers: [TiendaService],
})
export class TiendaModule {}
