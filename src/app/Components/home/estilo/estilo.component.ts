import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  // Arreglo de imágenes y nombres
  images = [
    { src: '../../../../assets/tipos-cortes/Corte-moderno-desvanecido.jpg', name: 'Hide Fade' },
    { src: '../../../../assets/tipos-cortes/Corte-moderno-desvanecido-medio.jpg', name: 'Mide Fade' },
    { src: '../../../../assets/tipos-cortes/Corte-moderno-desvanecido-bajo.png', name: 'Low Fade' },
    { src: '../../../../assets/tipos-cortes/fade-lineas.jpg', name: 'Fade con diseños laterales' },
    { src: '../../../../assets/tipos-cortes/Buzz-cut.png', name: 'Buzz Cut' },
    { src: '../../../../assets/tipos-cortes/Burst-fade.png', name: 'Burst Fade' },
    { src: '../../../../assets/tipos-cortes/Drop-fade.png', name: 'Drop Fade' },
    { src: '../../../../assets/tipos-cortes/Corte-moderno-quiff.jpg', name: 'Corte Quiff' },
    { src: '../../../../assets/tipos-cortes/Corte-clasico-desvanecido2.jpg', name: 'Corte Clásico Desvanecido' },
    { src: '../../../../assets/tipos-cortes/Corte-clasico-militar.jpg', name: 'Corte Clásico Estilo Militar' },
    { src: '../../../../assets/tipos-cortes/Corte-clasico-tupe.jpg', name: 'Corte Clásico con Tupe' },
    { src: '../../../../assets/tipos-cortes/Corte-clasico-de-lado.jpg', name: 'Corte Clásico de Lado' },
    { src: '../../../../assets/tipos-cortes/Corte-clasico-pompadour.jpg', name: 'Corte Clásico con Pompadour' }
  ];

  // Arreglo para almacenar las imágenes aleatorias asignadas
  randomImages: any[] = [];

  ngOnInit() {
    this.setRandomImages();
  }

  // Función para asignar imágenes y nombres aleatorios
  setRandomImages() {
    const shuffledImages = [...this.images].sort(() => 0.5 - Math.random());
    this.randomImages = shuffledImages.slice(0, 6); // Aseguramos que solo se tomen 6 imágenes
  }
}
