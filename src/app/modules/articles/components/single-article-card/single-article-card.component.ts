import { Component, Input } from '@angular/core';
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
}
