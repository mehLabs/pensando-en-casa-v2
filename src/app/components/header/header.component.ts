import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidebar: any;

  title = 'Pensando en casa';
  breakpoint: number = 400;

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    let size = $event.target.innerWidth;
    if (size < this.breakpoint) {
      this.title = 'PEC';
    } else {
      this.title = 'Pensando en casa';
    }
  }
}
