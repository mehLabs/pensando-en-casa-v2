import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() article: Article = {
    id: 0,
    title: 'No existe',
    subtitle: 'Error',
    price: 0,
    description: '',
    imgs: [],
  };
  @Input() actions: boolean = true;

  constructor(private router: Router) {}

  goToLink(link: string) {
    this.router.navigateByUrl(link);
  }
}
