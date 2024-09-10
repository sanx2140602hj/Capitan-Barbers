import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements AfterViewInit {

  ngAfterViewInit() {
    const images = document.querySelectorAll('img'); // Selecciona todas las imágenes

    images.forEach((img) => {
      img.addEventListener('error', this.handleImageError); // Añade el evento de error
    });
  }

  handleImageError() {
    console.error('Imagen no pudo cargarse. Recargando la página en 3 segundos...');
    setTimeout(() => {
      location.reload(); // Recarga la página después de 3 segundos
    }, 3000);
  }
}
