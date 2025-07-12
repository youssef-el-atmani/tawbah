import { Component, signal, computed, OnInit, input } from '@angular/core';
import { single } from 'rxjs';
import { MomahidCardService } from '../../services/momahid-card.service';
import { Momahid } from '../../models/momahid.model';

@Component({
  selector: 'app-momahid-card',
  imports: [],
  templateUrl: './momahid-card.component.html',
  styleUrl: './momahid-card.component.scss',
  providers: [MomahidCardService],
})
export class MomahidCardComponent {
  momahidInfo = input<Momahid>();

  // Card Related info
  verifiedStampStatus = computed(() =>
    this.momahidInfo()?.isStoryVerified ? 'visible' : 'hidden'
  );

  // # Momahid Conditional info #

  // Momahid word or study
  isMomahidStudy = signal(true);
  momahidWorkOrStudy = computed(() =>
    this.momahidInfo()?.isMomahidStudy ? 'أدرس' : 'أشتغل'
  );

  momahidWorkOrStudyIcon = computed(() =>
    this.momahidInfo()?.isMomahidStudy
      ? 'icons/momahid-card/school.png'
      : 'icons/momahid-card/work.png'
  );

  // Momahid family status: Single or Married
  momahidFamilyStatus = computed(() =>
    this.momahidInfo()?.isMomahidMarried ? 'متزوج' : 'أعزب'
  );

  momahidFamilyStatusIcon = computed(() =>
    this.momahidInfo()?.isMomahidMarried
      ? 'icons/momahid-card/married.png'
      : 'icons/momahid-card/single.png'
  );

  // Momahid Addition Duration
  momahidAddictionDuration = signal(
    this.momahidInfo()?.momahidAddictionDuration
  );

  momahidAddictionDurationDisplay = computed(() => {
    // let addictDuration = this.momahidInfo()?.momahidAddictionDuration;

    const addictInfo = this.momahidInfo()?.momahidAddictionDuration; // type: Momahid | undefined
    if (!addictInfo) return '';

    const addictDuration = addictInfo;

    const LRM = '\u200E'; //Left-to-Right Mark

    if (addictDuration >= 1 && addictDuration < 2) {
      return `سنة واحدة`;
    } else if (addictDuration >= 2 && addictDuration < 3) {
      return `سنتان من الإدمان`;
    } else if (addictDuration >= 3 && addictDuration < 10) {
      return `سنوات من الإدمان ${LRM} -0${addictDuration}-`; // LRM: Force the string to respect the original order
    } else if (addictDuration >= 10 && addictDuration < 11) {
      return `سنوات من الإدمان ${LRM} -${addictDuration}-`; // LRM: Force the string to respect the original order
    } else {
      return `سنة من الإدمان ${LRM} -${addictDuration}-`; // LRM: Force the string to respect the original order
    }
  });
}
