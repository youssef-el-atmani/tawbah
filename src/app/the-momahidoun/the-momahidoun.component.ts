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

  // Splitting Stories To verified and unverified
  verifiedStoriesOriginal: Momahid[] = [];
  unverifiedStoriesOriginal: Momahid[] = [];

  // The stories to be displayed based on the user preference
  // Initially all the stories will be displayed
  verifiedStoriesToBeDisplayed: Momahid[] = [];
  unverifiedStoriesToBeDisplayed: Momahid[] = [];

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
      .subscribe((mStories) => {
        // Store all the stories
        this.momahidounStories = mStories;

        // only the verified stories
        this.verifiedStoriesOriginal = this.momahidounStories.filter(
          (momahidStory) => momahidStory.isStoryVerified
        );

        // only the unverified stories
        this.unverifiedStoriesOriginal = this.momahidounStories.filter(
          (momahidStory) => !momahidStory.isStoryVerified
        );

        // Stories to be displayed
        // Reflects current user-applied filters; initially displays all items
        this.verifiedStoriesToBeDisplayed = this.verifiedStoriesOriginal;
        this.unverifiedStoriesToBeDisplayed = this.unverifiedStoriesOriginal;
      });
  }
}
