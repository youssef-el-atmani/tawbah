import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMomahidounComponent } from './the-momahidoun.component';

describe('TheMomahidounComponent', () => {
  let component: TheMomahidounComponent;
  let fixture: ComponentFixture<TheMomahidounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMomahidounComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMomahidounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
