import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleCarritoComponent } from './pages/detalle-carrito/detalle-carrito.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { TiendaComponent } from './tienda.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VenderProductoComponent } from './pages/vender-producto/vender-producto.component';

const routes: Routes = [
  {
    path: '',
    component: TiendaComponent,
    children: [
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'producto/:id',
        component: DetalleProductoComponent
      },
      {
        path: 'carrito',
        component:DetalleCarritoComponent
      },
      {
        path: 'vender',
        component:VenderProductoComponent
      },
      {
        path: '**',
        redirectTo: 'productos'
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaRoutingModule {}
