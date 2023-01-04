import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-bag-card',
  templateUrl: './bag-card.component.html',
  styleUrls: ['./bag-card.component.css'],
})
export class BagCardComponent {
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Input() article: Article = {
    id: 0,
    title: 'No existe',
    subtitle: 'Error',
    price: 0,
    description: '',
    imgs: [],
  };

  constructor(private router: Router) {}

  removeItem() {
    let item;
    if (typeof this.article.id === 'string') {
      item = Number.parseInt(this.article.id);
    } else {
      item = this.article.id;
    }
    this.remove.emit(item);
  }

  goToLink(link: string) {
    this.router.navigateByUrl(link);
  }
}
