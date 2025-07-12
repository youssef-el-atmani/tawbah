import { TestBed } from '@angular/core/testing';

import { MomahidCardService } from './momahid-card.service';

describe('MomahidCardService', () => {
  let service: MomahidCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomahidCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
