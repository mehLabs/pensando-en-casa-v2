import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  subtitle: string = '';
  toSubtitle: string = 'Sabemos cómo hacerte feliz...';
  articles: Article[];
  constructor(private articleService: ArticlesService) {
    this.articles = [];
    articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  ngOnInit(): void {
    this.write(this.toSubtitle, 0);
  }

  write(word: string, position: number) {
    this.subtitle = this.subtitle + word.charAt(position);
    if (position < word.length) {
      setTimeout(() => {
        this.write(word, position + 1);
      }, 75);
    }
  }

  firstThree(all: any[]) {
    return all.filter((item, index) => index > 2);
  }

  shuffleArray(incArray: any[]) {
    let array = [...incArray];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getItemsIds(items: any[]) {
    const ids = items.map((item) => item.id);
    return ids;
  }
}
