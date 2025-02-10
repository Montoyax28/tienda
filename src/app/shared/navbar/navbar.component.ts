import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarItem, Producto } from '../../tienda/interfaces/tienda.interfaces';
import { CarritoService } from 'src/app/tienda/services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  // Botones del nav
  listNavbar: NavBarItem[] = [
    {
      nombre: 'Productos',
      route: 'productos',
    },
    {
      nombre: 'Ir al Carrito',
      route: 'carrito',
    },
  ];

  constructor(
    private readonly service: CarritoService,
    private router: Router // 🔹 Inyectamos el Router para la navegación
  ) {}

  // Botones del Dropdown
  carritoNav: NavBarItem | undefined;

  ngOnInit() {
    this.carritoNav = this.listNavbar.find(item => item.nombre === 'Ir al Carrito');
  }

  get stateCart() {
    return this.service.currentCart;
  }

  deleteProduct(producto: Producto): void {
    this.service.removeItemCart(producto);
  }

  isModalOpen = false;
  isDropdownOpen = false;

  // Botón con desplegable
  @ViewChild('dropdown') dropdown!: ElementRef;

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  insideClick(event: Event) {
    event.stopPropagation();
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  goToVenderProducto() {
    this.router.navigate(['/tienda/vender']); // 🔹 Ruta corregida
  }

  // Popup
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
