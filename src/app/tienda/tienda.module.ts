import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TiendaRoutingModule } from './tienda-routing.module';

import { SharedModule } from '../shared/shared.module';

import { TiendaService } from './services/tienda.service';

import { ComponentsModule } from './components/components.module';
import { DetalleCarritoComponent } from './pages/detalle-carrito/detalle-carrito.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { TiendaComponent } from './tienda.component';
import { VenderProductoComponent } from './pages/vender-producto/vender-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoService } from './services/carrito.service';

@NgModule({
  declarations: [
    DetalleCarritoComponent,
    DetalleProductoComponent,
    TiendaComponent,
    VenderProductoComponent,
    ProductosComponent,
  ],
  imports: [CommonModule, TiendaRoutingModule,ReactiveFormsModule, ComponentsModule, SharedModule],
  providers: [TiendaService, CarritoService],
})
export class TiendaModule {}
