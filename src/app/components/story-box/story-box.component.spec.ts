import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoxComponent } from './story-box.component';

describe('StoryBoxComponent', () => {
  let component: StoryBoxComponent;
  let fixture: ComponentFixture<StoryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
