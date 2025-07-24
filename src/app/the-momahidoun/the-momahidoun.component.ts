import { Component, OnInit } from '@angular/core';
import { MomahidounBoxComponent } from '../components/momahidoun-box/momahidoun-box.component';
import { StoryBoxComponent } from '../components/story-box/story-box.component';
import { MomahidStoryComponent } from '../components/momahid-story/momahid-story.component';
import { MomahidStoryService } from '../services/momahid-story.service';
import { Momahid } from '../models/momahid.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-the-momahidoun',
  imports: [MomahidounBoxComponent, StoryBoxComponent, MomahidStoryComponent],
  templateUrl: './the-momahidoun.component.html',
  styleUrl: './the-momahidoun.component.scss',
  providers: [MomahidStoryService],
})
export class TheMomahidounComponent implements OnInit {
  momahidounStories: Momahid[] = [];
  constructor(private momahidStoryService: MomahidStoryService) {}

  ngOnInit(): void {
    this.momahidStoryService
      .getMomahidounStories()
      .pipe(
        catchError((err) => {
          console.error("YSF: Can't get the stories data", err);
          throw err;
        })
      )
      .subscribe((mStories) => (this.momahidounStories = mStories));
  }
}
