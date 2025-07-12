import { Component, signal, inject } from '@angular/core';
import { MomahidCardComponent } from '../momahid-card/momahid-card.component';
import { MomahidCardService } from '../../services/momahid-card.service';

@Component({
  selector: 'app-momahidoun-box',
  imports: [MomahidCardComponent],
  templateUrl: './momahidoun-box.component.html',
  styleUrl: './momahidoun-box.component.scss',
  providers: [MomahidCardService],
})
export class MomahidounBoxComponent {
  title = signal('المُـمَـهِّـدُون');

  momahidCardService = inject(MomahidCardService);
}
