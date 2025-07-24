import {
  Component,
  ElementRef,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-momahid-story',
  imports: [],
  templateUrl: './momahid-story.component.html',
  styleUrl: './momahid-story.component.scss',
})
export class MomahidStoryComponent {
  @ViewChild('storyContent') storyContent!: ElementRef;
  @ViewChild('momahidStoryContainer') momahidStoryContainer!: ElementRef;
  @ViewChild('expandingBtnContainer') expandingBtnContainer!: ElementRef;

  isStoryExpanded = false;
  inlineStoryStyle = signal(`height: 560px; overflow: hidden;`);

  expandStory() {
    if (!this.isStoryExpanded) {
      this.isStoryExpanded = true;
      this.rend.removeClass(this.storyContent.nativeElement, 'shrink-story');

      // remove the btn that responsible for expanding the story
      // since it became useless after story get expanded
      this.rend.removeChild(
        this.momahidStoryContainer.nativeElement,
        this.expandingBtnContainer.nativeElement
      );
    }
  }

  constructor(private elem: ElementRef, private rend: Renderer2) {}

  ngAfterViewInit(): void {
    this.rend.addClass(this.storyContent.nativeElement, 'shrink-story');
  }
}
