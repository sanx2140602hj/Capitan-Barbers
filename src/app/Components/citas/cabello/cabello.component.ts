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
}
