import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const ids: string = params.get('ids') || '';
      this.articles = this.articlesService.getArticlesByIds(
        ids ? ids.split(',').map((id) => Number.parseInt(id)) : []
      );
    });
  }
}
