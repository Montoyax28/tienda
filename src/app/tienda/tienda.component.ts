import { Component, OnInit } from '@angular/core';
import { TiendaService } from './services/tienda.service';
import { Producto } from './interfaces/tienda.interfaces';

@Component({
  selector: 'app-tienda',
  template: `<div class="contain">
    <!--Navegacion-->
    <app-navbar></app-navbar>
    <!--Cards-->
    <div class="box">
      <router-outlet></router-outlet>
    </div>
  </div> `,
  styleUrls: ['tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  productos: Producto[] = [];
  loading = true;

  constructor(private readonly service: TiendaService) {}


  ngOnInit(): void {}
}
