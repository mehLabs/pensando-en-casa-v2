import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { AddedToCartComponent } from './views/added-to-cart/added-to-cart.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  {
    path: 'added',
    component: AddedToCartComponent,
    data: { animation: 'AddToCart' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
