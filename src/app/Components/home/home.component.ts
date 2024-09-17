import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public frase: string = '';  // Variable para almacenar la frase seleccionada

  // Arreglo de frases posibles
  private frases: string[] = [
    "Aquí es donde el cabello se convierte en arte.",
    "Un buen estilo no solo cambia tu apariencia, transforma cómo te perciben.",
    "Un corte adecuado puede ser la diferencia entre pasar desapercibido y destacar.",
    "La confianza comienza con un buen corte.",
    "Tu estilo es tu declaración personal, haz que cuente.",
    "Luce bien, siéntete mejor.",
    "La primera impresión comienza con un buen look.",
    "Tu cabello, tu mejor accesorio.",
    "Cambia tu corte, cambia tu actitud.",
    "Cada corte cuenta una historia, ¿cuál es la tuya?",
    "Porque un buen look nunca pasa desapercibido.",
    "Transforma tu cabello, transforma tu día.",
    "Lo clásico nunca pasa de moda.",
    "La precisión en cada corte, la diferencia en cada detalle.",
    "El estilo correcto puede cambiarlo todo.",
    "Destaca con un corte a tu medida.",
    "Tu look, nuestra pasión.",
    "El corte perfecto, para el hombre perfecto.",
    "Un buen corte es una inversión en tu imagen.",
    "Estilo, precisión y confianza en cada sesión.",
    "Haz que tu cabello hable por ti.",
    "Renueva tu imagen, redefine tu estilo.",
    "Porque los detalles importan, y tu cabello es uno de ellos.",
    "El estilo no se improvisa, se crea.",
    "Dale a tu cabello el respeto que merece.",
    "Lo mejor comienza con un buen corte.",
    "Más que un corte, es una experiencia.",
    "Tu personalidad, reflejada en tu corte.",
    "Porque lo clásico nunca pasa de moda.",
    "Donde el estilo y la técnica se encuentran.",
    "El poder de un buen corte está en los detalles.",
    "Un corte hecho para sobresalir.",
    "Un hombre seguro comienza con un corte perfecto.",
    "Cada hombre merece un corte hecho a la medida.",
    "El corte ideal para cada rostro y estilo.",
    "Tu cabello, tu mejor arma de estilo.",
    "La diferencia está en la técnica, y nosotros la dominamos.",
    "Corte a corte, creando tu mejor versión.",
    "Tu imagen es tu marca, haz que sea inolvidable.",
    "Diseñamos estilos que definen personalidades.",
    "Cortes que hacen la diferencia.",
    "Dale a tu cabello el estilo que merece.",
    "Haz de cada día una oportunidad para lucir mejor.",
    "Porque un buen corte es una declaración de estilo.",
    "La elegancia empieza con un buen corte.",
    "Tu estilo, siempre a la vanguardia.",
    "Más que un corte, es una obra maestra.",
    "Cortes diseñados para que sobresalgas.",
    "El corte perfecto, para un estilo único."
  ];

  // Función que selecciona una frase aleatoria
  getFraseAleatoria(): void {
    const randomIndex = Math.floor(Math.random() * this.frases.length);
    this.frase = this.frases[randomIndex];
  }

  // Método que se ejecuta al cargar el componente
  ngOnInit(): void {
    this.getFraseAleatoria();  // Selecciona una frase al iniciar
  }

}
