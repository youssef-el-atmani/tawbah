import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomahidounBoxComponent } from './momahidoun-box.component';

describe('MomahidounBoxComponent', () => {
  let component: MomahidounBoxComponent;
  let fixture: ComponentFixture<MomahidounBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomahidounBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomahidounBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
