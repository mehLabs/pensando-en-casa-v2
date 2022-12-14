import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './pages/main/components/carousel/carousel.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EssentialsModule } from './modules/essentials/essentials.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EssentialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
