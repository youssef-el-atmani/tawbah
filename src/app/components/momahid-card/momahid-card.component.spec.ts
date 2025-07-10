import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomahidCardComponent } from './momahid-card.component';

describe('MomahidCardComponent', () => {
  let component: MomahidCardComponent;
  let fixture: ComponentFixture<MomahidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomahidCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomahidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
