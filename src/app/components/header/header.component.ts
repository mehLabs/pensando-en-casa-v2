import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { BagService } from 'src/app/services/bag.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() sidebar: any;
  show: boolean = true;

  title = 'Pensando en casa';
  breakpoint: number = 400;

  quantItems = 0;
  badge = 2;

  constructor(
    private responsiveService: ResponsiveService,
    private bag: BagService
  ) {
    responsiveService.innerWidth().subscribe((width) => {
      if (width < this.breakpoint) {
        this.title = 'PEC';
      } else {
        this.title = 'Pensando en casa';
      }
    });
    responsiveService.isShowHeader().subscribe((show) => (this.show = show));
  }

  ngOnInit(): void {
    this.quantItems = this.bag.getAllItems().length;
    console.log(this.quantItems);
  }
}
