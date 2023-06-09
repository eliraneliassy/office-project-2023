import { ButtonComponent } from './../button/button.component';

import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input, NgModule, TemplateRef } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

@Component({
  selector: 'o-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, CommonModule],
  standalone: true
})
export class SlideShowComponent implements AfterViewInit {
  @Input() slides: string[] = [];
  @Input() slidesTemplate?: TemplateRef<any>;

  slidesPositoions: any[] = [];
  currentPosition = 0;

  navigation = {
    prev: () => this.slide(-1),
    next: () => this.slide(1)
  };

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngAfterViewInit(): void {
    this.document.querySelectorAll('.slide')
      .forEach((div: any) => {
        this.slidesPositoions.push(div.offsetLeft)
      })
  }

  slide(direction: number) {
    
    this.currentPosition += direction;

    if (this.currentPosition < 0) {
      this.currentPosition = this.slidesPositoions.length - 1
    }
    if (this.currentPosition > this.slidesPositoions.length - 1) {
      this.currentPosition = 0
    }

    this.document.querySelector('.slider')?.scrollTo({
      left: this.slidesPositoions[this.currentPosition],
      behavior: 'smooth'
    })


  }
}
