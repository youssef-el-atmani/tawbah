import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomahidStoryComponent } from './momahid-story.component';

describe('MomahidStoryComponent', () => {
  let component: MomahidStoryComponent;
  let fixture: ComponentFixture<MomahidStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomahidStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomahidStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
