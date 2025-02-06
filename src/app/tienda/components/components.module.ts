import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [CardComponent, LoaderComponent,],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, LoaderComponent],
})
export class ComponentsModule {}
