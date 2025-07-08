import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-story-box',
  imports: [],
  templateUrl: './story-box.component.html',
  styleUrl: './story-box.component.scss',
})
export class StoryBoxComponent {
  title = signal('الــقــصــة');
  profileImgUrl = signal('img/generic-img.jpg');
  storyVerified = signal(true);
  verifiedStampStatus = computed(() =>
    this.storyVerified() ? 'visible' : 'hidden'
  );
}
