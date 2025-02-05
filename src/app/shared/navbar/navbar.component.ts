import { Component } from '@angular/core';
import { NavBarItem } from '../../tienda/interfaces/tienda.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent  {
  listNavbar: NavBarItem[] = [
    {
      nombre: 'Productos',
      route: 'tienda',
    },
    {
      nombre: 'Ver Carrito',
      route: 'carrito',
    },
  ];

}
