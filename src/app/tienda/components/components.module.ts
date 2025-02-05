import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [CardComponent, CarritoComponent, LoaderComponent,],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, CarritoComponent, LoaderComponent],
})
export class ComponentsModule {}
