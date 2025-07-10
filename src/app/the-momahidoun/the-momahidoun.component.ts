import { Component } from '@angular/core';
import { MomahidounBoxComponent } from '../components/momahidoun-box/momahidoun-box.component';
import { StoryBoxComponent } from '../components/story-box/story-box.component';

@Component({
  selector: 'app-the-momahidoun',
  imports: [MomahidounBoxComponent, StoryBoxComponent],
  templateUrl: './the-momahidoun.component.html',
  styleUrl: './the-momahidoun.component.scss',
})
export class TheMomahidounComponent {}
