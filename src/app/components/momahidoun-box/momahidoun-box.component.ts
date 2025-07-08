import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-momahidoun-box',
  imports: [],
  templateUrl: './momahidoun-box.component.html',
  styleUrl: './momahidoun-box.component.scss',
})
export class MomahidounBoxComponent {
  title = signal('المُـمَـهِّـدُون');
}
