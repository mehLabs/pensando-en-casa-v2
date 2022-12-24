import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './pages/bag/bag.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    data: { animation: 'ToRight' },
  },
  { path: '', component: MainComponent, data: { animation: 'Home' } },
  { path: 'bag', component: BagComponent, data: { animation: 'ToRight' } },
  {
    path: 'article/:articleId',
    loadChildren: () =>
      import('./modules/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'ToRight' },
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    data: { animation: 'ToBottom' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
