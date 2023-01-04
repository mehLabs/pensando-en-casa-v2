import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { BagService } from 'src/app/services/bag.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

type ViewArticle = Article & { selected: string };
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnDestroy, OnInit {
  articleId: string | number = 0;
  article: ViewArticle | undefined;
  sm: boolean = false;
  mobile: boolean = false;
  breakpoint: number = 320;
  bookmarked: boolean = false;

  //this one is the max height of the carousel in order to avoid unpolished transitions
  maxHeight: number = 0;

  articles: Article[] = [];

  selectImage(img: string) {
    if (this.article) this.article.selected = img;
  }

  bookmark() {
    this.bookmarked = !this.bookmarked;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticlesService,
    private uiService: ResponsiveService,
    private router: Router,
    private bagService: BagService
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

  addToBag() {
    this.bagService.addToBag(this.articleId);
    const url = this.router.url;
    this.router.navigateByUrl(url + '/added');
  }

  ngOnDestroy(): void {
    this.uiService.doShowHeader();
  }

  allImagesLoaded(sizes: any[]) {
    let bigger = 0;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    for (let size of sizes) {
      const relationHeight = (size.height * screenWidth) / size.width;
      if (relationHeight > bigger) {
        bigger = relationHeight;
      }
    }
    if (bigger > screenHeight) bigger = screenHeight;
    this.maxHeight = bigger;
  }
  getMaxHeight(imgs: string[]) {
    let loadedImages = 0;
    let imagesSizes: object[] = [];
    for (let image of imgs) {
      let img = new Image();
      img.addEventListener('load', () => {
        let height = img.height;
        let width = img.width;
        loadedImages++;
        imagesSizes.push({ height, width });
        if (loadedImages === imgs.length) {
          this.allImagesLoaded(imagesSizes);
        }
      });
      img.src = image;
    }
  }

  subscribeRouteChange() {
    this.activatedRoute.params.subscribe((params = {}) => {
      this.articleId = params['articleId'];

      const article = this.articleService.getArticle(this.articleId) || {
        description: 'El artículo no existe, o existía pero fue borrado',
        imgs: [
          'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png',
        ],
        price: 0,
        subtitle: 'Error',
        title: 'Artículo inexistente',
      };

      this.article = { ...article, id: -1, selected: article.imgs[0] };
      this.getMaxHeight(article.imgs);

      this.uiService.scrollUp();
    });
  }
}
