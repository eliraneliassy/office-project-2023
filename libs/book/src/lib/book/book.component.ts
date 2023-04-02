import { MatCardModule } from '@angular/material/card';
import { Book } from './book.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '@office/ui-components';
import { NgIf } from '@angular/common';

@Component({
  selector: 'officeproject-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, ButtonComponent, NgIf]
})
export class BookComponent {
  @Input() book?: Book;

  @Output() addToCart = new EventEmitter<Book>();

  addToCartHanlder(){
    this.addToCart.emit(this.book);
  }
  
  
}
