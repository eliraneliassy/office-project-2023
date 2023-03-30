import { ButtonComponentModule } from '@office/ui-components';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Input, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'o-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideShowComponent implements AfterViewInit {
  @Input() slides: string[] = [];

  slidesPositoions: any[] = [];
  currentPosition = 0;

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

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [SlideShowComponent],
  exports: [SlideShowComponent],
})
export class SlideShowComponentModule { }
