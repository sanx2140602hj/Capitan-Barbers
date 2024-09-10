import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-barba',
  templateUrl: './barba.component.html',
  styleUrls: ['./barba.component.css']
})
export class BarbaComponent {
  isDesktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth > 768;
  }

  ngOnInit() {
    this.isDesktop = window.innerWidth > 768;
  }
}
