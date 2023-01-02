import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-single-article-card',
  templateUrl: './single-article-card.component.html',
  styleUrls: ['./single-article-card.component.css'],
})
export class SingleArticleCardComponent {
  @Input() article: Article = {
    id: 0,
    title: 'No existe',
    subtitle: 'Error',
    price: 0,
    description: '',
    imgs: [],
  };

  constructor(private router: Router) {}

  goToLink(link: string) {
    this.router.navigateByUrl(link);
  }
}
