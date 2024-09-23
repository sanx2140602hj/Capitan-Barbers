import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-cabello',
  templateUrl: './cabello.component.html',
  styleUrls: ['./cabello.component.css']
})
export class CabelloComponent {
  isDesktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth > 768;
  }

  ngOnInit() {
    this.isDesktop = window.innerWidth > 768;
  }
  goToWhatsApp() {
    const phoneNumber = "2383035208"; // Número de WhatsApp
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let message = '';

    if (hours >= 8 && hours < 12) {
        message = "¡Buenos días! Me gustaría agendar un corte de cabello. ¿Tienen disponibilidad hoy?";
    } else if (hours >= 12 && hours < 20) {
        message = "¡Buenas tardes! ¿Habrá algún espacio para un corte de cabello hoy? Me encantaría visitar su barbería.";
    } else if (hours >= 20 && hours < 24) {
        message = "¡Buenas noches! ¿Tendrán algún espacio disponible para un corte mañana? ¡Gracias!";
    } else {
        message = "Hola, me gustaría saber si habrá algún espacio disponible para un corte de cabello cuando abran. ¡Gracias de antemano!";
    }

    // Codificar el mensaje para evitar problemas de caracteres
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
}
