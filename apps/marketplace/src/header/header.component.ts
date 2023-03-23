import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'officeproject-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
