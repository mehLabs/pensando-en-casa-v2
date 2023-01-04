import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SharedModule } from '../shared/shared.module';
import { AddedToCartComponent } from './views/added-to-cart/added-to-cart.component';
import { NgParticlesModule } from 'ng-particles';
import { EssentialsModule } from '../essentials/essentials.module';

@NgModule({
  declarations: [ArticleComponent, AddedToCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
    NgParticlesModule,
    EssentialsModule,
  ],
})
export class ArticleModule {}
