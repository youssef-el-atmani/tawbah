import { Component, signal, computed } from '@angular/core';
import { single } from 'rxjs';
import { MomahidCardService } from '../../services/momahid-card.service';

@Component({
  selector: 'app-momahid-card',
  imports: [],
  templateUrl: './momahid-card.component.html',
  styleUrl: './momahid-card.component.scss',
  providers: [MomahidCardService],
})
export class MomahidCardComponent {
  // Card Related info
  pageLanguage = signal('ar');
  isStoryVerified = signal(true);
  verifiedStampStatus = computed(() =>
    this.isStoryVerified() ? 'visible' : 'hidden'
  );

  // # Momahid direct info #
  momahidPhoto = signal('img/generic-img.jpg');
  momahidName = signal('يوسف العثماني');
  momahidAge = signal('25');
  momahidCountry = signal('البلد');

  // # Momahid Conditional info #

  // Momahid word or study
  isMomahidStudy = signal(true);
  momahidWorkOrStudy = computed(() =>
    this.isMomahidStudy() ? 'أدرس' : 'أشتغل'
  );

  momahidWorkOrStudyIcon = computed(() =>
    this.isMomahidStudy()
      ? 'icons/momahid-card/school.png'
      : 'icons/momahid-card/work.png'
  );

  // Momahid family status: Single or Married
  isMomahidMarried = signal(false);
  momahidFamilyStatus = computed(() =>
    this.isMomahidMarried() ? 'متزوج' : 'أعزب'
  );

  momahidFamilyStatusIcon = computed(() =>
    this.isMomahidMarried()
      ? 'icons/momahid-card/married.png'
      : 'icons/momahid-card/single.png'
  );

  // Momahid Addition Duration
  momahidAddictionDuration = signal(9);

  momahidAddictionDurationDisplay = computed(() => {
    let addictDuration = this.momahidAddictionDuration();
    const LRM = '\u200E'; //Left-to-Right Mark

    if (addictDuration >= 1 && addictDuration < 2) {
      return `سنة واحدة`;
    } else if (addictDuration >= 2 && addictDuration < 3) {
      return `سنتان من الإدمان`;
    } else if (addictDuration >= 3 && addictDuration < 11) {
      return `سنوات من الإدمان ${LRM} -0${addictDuration}-`; // LRM: Force the string to respect the original order
    } else {
      return `سنة من الإدمان ${LRM} -${addictDuration}-`; // LRM: Force the string to respect the original order
    }
  });
}
