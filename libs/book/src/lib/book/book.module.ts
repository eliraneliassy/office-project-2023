import { ButtonComponentModule } from '@office/ui-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookComponentModule {}
