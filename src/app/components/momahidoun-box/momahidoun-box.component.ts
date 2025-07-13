import { Component, signal, inject, OnInit } from '@angular/core';
import { MomahidCardComponent } from '../momahid-card/momahid-card.component';
import { MomahidCardService } from '../../services/momahid-card.service';
import { Momahid } from '../../models/momahid.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-momahidoun-box',
  imports: [MomahidCardComponent],
  templateUrl: './momahidoun-box.component.html',
  styleUrl: './momahidoun-box.component.scss',
  providers: [MomahidCardService],
})
export class MomahidounBoxComponent implements OnInit {
  title = signal('المُـمَـهِّـدُون');

  alMomahidoun: Momahid[] = [];

  constructor(private momahidCardService: MomahidCardService) {}

  ngOnInit(): void {
    this.momahidCardService
      .getAlMomahidoun()
      .pipe(
        catchError((err) => {
          console.error(
            "Youssef: Can't get Al-Momahidoun list, maybe there is a server problem",
            err
          );
          throw err;
        })
      )
      .subscribe((data) => (this.alMomahidoun = data));
  }
}
