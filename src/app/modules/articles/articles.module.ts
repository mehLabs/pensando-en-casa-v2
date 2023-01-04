import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { SharedModule } from '../shared/shared.module';
import { EssentialsModule } from '../essentials/essentials.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    EssentialsModule,
  ],
})
export class ArticlesModule {}
