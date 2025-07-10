import { Component, signal } from '@angular/core';
import { MomahidCardComponent } from '../momahid-card/momahid-card.component';

@Component({
  selector: 'app-momahidoun-box',
  imports: [MomahidCardComponent],
  templateUrl: './momahidoun-box.component.html',
  styleUrl: './momahidoun-box.component.scss',
})
export class MomahidounBoxComponent {
  title = signal('المُـمَـهِّـدُون');
}
