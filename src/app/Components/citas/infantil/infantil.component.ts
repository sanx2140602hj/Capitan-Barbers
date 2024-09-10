import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.css']
})
export class InfantilComponent {
  isDesktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth > 768;
  }

  ngOnInit() {
    this.isDesktop = window.innerWidth > 768;
  }
}
