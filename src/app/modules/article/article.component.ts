import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnDestroy, OnInit {
  articleId: string | number = 0;
  article: Article | undefined;
  sm: boolean = false;
  mobile: boolean = false;
  breakpoint: number = 320;

  articles: Article[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticlesService,
    private uiService: ResponsiveService
  ) {
    articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
    this.uiService.hideHeader();

    this.uiService.isMobile().subscribe((mobile) => (this.mobile = mobile));
    this.uiService.innerWidth().subscribe((width) => {
      if (width <= this.breakpoint) {
        this.sm = true;
      } else {
        this.sm = false;
      }
    });
  }

  ngOnInit(): void {
    this.subscribeRouteChange();
  }

  ngOnDestroy(): void {
    this.uiService.doShowHeader();
  }

  subscribeRouteChange() {
    this.activatedRoute.params.subscribe((params = {}) => {
      this.articleId = params['articleId'];

      const article = this.articleService.getArticle(this.articleId);

      this.article = article;

      this.uiService.scrollUp();
    });
  }
}
