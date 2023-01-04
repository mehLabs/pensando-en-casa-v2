import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ArsCurrencyPipe } from 'src/app/pipes/ars-currency.pipe';
import { YesNoPipe } from 'src/app/pipes/yes-no.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [ArsCurrencyPipe, YesNoPipe, ArticleCardComponent],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatBadgeModule,
  ],
  exports: [
    ArticleCardComponent,
    MatButtonModule,
    YesNoPipe,
    ArsCurrencyPipe,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatBadgeModule,
  ],
})
export class EssentialsModule {}
