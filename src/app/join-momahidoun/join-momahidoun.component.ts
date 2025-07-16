import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-join-momahidoun',
  imports: [ReactiveFormsModule],
  templateUrl: './join-momahidoun.component.html',
  styleUrl: './join-momahidoun.component.scss',
})
export class JoinMomahidounComponent {
  // ----
  momahidName = new FormControl();
  momahidAge = new FormControl();
  momahidTypeOfWorkStudy = new FormControl();
  // ----
  momahidAgeWhenFirstInteractWithPorn = new FormControl();
  momahidAddictionDuration = new FormControl();
  momahidPornDiscovery = new FormControl();
  previousFailedAttempts = new FormControl();
  lifeDuringAddiction = new FormControl();
  // ----
  lifeAfterTrueTawbah = new FormControl();
  majorWorshipsThatHealedTheHeart = new FormControl();
  majorSinsThatPoisonedTheHeart = new FormControl();
  messageForMomahidBrother = new FormControl();

  momahidForm: FormGroup = new FormGroup({
    momahidName: new FormControl(),
    momahidAge: new FormControl(),
    momahidTypeOfWorkStudy: new FormControl(),
    // ----
    momahidAgeWhenFirstInteractWithPorn: new FormControl(),
    momahidAddictionDuration: new FormControl(),
    momahidPornDiscovery: new FormControl(),
    previousFailedAttempts: new FormControl(),
    lifeDuringAddiction: new FormControl(),
    // ----
    lifeAfterTrueTawbah: new FormControl(),
    majorWorshipsThatHealedTheHeart: new FormControl(),
    majorSinsThatPoisonedTheHeart: new FormControl(),
    messageForMomahidBrother: new FormControl(),
  });

  submitMomahidRequest() {
    const obj = this.momahidForm.value;
    console.log(obj);
  }
}
