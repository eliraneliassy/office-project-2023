import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './lib.routes';
import { FeedComponent } from './feed/feed.component';
import { BookComponent } from '@office/books';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(feedRoutes),
    BookComponent
  ],
  declarations: [FeedComponent],
})
export class FeedModule { }
