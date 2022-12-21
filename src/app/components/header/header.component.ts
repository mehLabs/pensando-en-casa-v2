import { Component, HostListener, Input } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidebar: any;
  show: boolean = true;

  title = 'Pensando en casa';
  breakpoint: number = 400;

  constructor(private responsiveService: ResponsiveService) {
    responsiveService.innerWidth().subscribe((width) => {
      if (width < this.breakpoint) {
        this.title = 'PEC';
      } else {
        this.title = 'Pensando en casa';
      }
    });
    responsiveService.isShowHeader().subscribe((show) => (this.show = show));
  }
}
