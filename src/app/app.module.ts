import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    BlogCardsComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
