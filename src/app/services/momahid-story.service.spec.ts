import { TestBed } from '@angular/core/testing';

import { MomahidStoryService } from './momahid-story.service';

describe('MomahidStoryService', () => {
  let service: MomahidStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomahidStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
