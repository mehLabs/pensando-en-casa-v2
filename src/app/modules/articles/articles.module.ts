import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { SingleArticleCardComponent } from './components/single-article-card/single-article-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticlesComponent, SingleArticleCardComponent],
  imports: [CommonModule, ArticlesRoutingModule, SharedModule],
})
export class ArticlesModule {}
