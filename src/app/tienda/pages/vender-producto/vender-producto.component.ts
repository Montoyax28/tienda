import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-vender-producto',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent implements OnInit {
  productoForm!: FormGroup;

  constructor(private fb: FormBuilder, private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  guardarProducto(): void {
    if (this.productoForm.invalid) {
      alert('Por favor completa todos los campos');
      return;
    }

    const nuevoProducto = this.productoForm.value;

    this.tiendaService.guardarProducto(nuevoProducto).subscribe(
      (respuesta) => {
        console.log('Producto agregado:', respuesta);
        alert('Producto agregado correctamente');
        this.productoForm.reset();
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }

  actualizarVistaPrevia() {
    this.productoForm.get('image')?.updateValueAndValidity();
  }
}
