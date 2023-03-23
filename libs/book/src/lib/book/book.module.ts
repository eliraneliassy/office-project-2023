import { ButtonComponentModule } from '@office/ui-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [CommonModule,
    ButtonComponentModule,
    MatCardModule],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookComponentModule { }
