import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../interfaces/tienda.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  @Input() producto!: Producto;

  constructor(private readonly router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('producto' in changes) {
      //console.log(this.producto);
    }
  }


  onViewProduct(producto: Producto):void {


    this.router.navigate(['producto/',  producto.id ], {
      relativeTo: this.activatedRoute.parent
    })

  }
}
