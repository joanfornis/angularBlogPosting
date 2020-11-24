import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    BlogCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
