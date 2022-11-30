import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() incommingArticles: Article[] = [];
  articles: Article[] = [];
  duration: number = 1;
  move: boolean = false;
  mobile: boolean = false;
  sm: boolean = false;

  constructor(private responsive: ResponsiveService) {}

  ngOnInit(): void {
    this.articles = [...this.incommingArticles];
    this.responsive.isMobile().subscribe((isMobile) => {
      this.mobile = isMobile;
    });
    this.responsive.innerWidth().subscribe((width) => {
      if (width <= 320) {
        this.sm = true;
      } else {
        this.sm = false;
      }
    });
  }

  nextItem() {
    if (!this.move) {
      this.move = true;
      setTimeout(() => {
        const firstItem = this.articles.shift();
        if (firstItem) {
          this.articles.push(firstItem);
        }
        this.move = false;
      }, this.duration * 1000);
    }
  }
}
