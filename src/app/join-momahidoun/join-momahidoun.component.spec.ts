import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMomahidounComponent } from './join-momahidoun.component';

describe('JoinMomahidounComponent', () => {
  let component: JoinMomahidounComponent;
  let fixture: ComponentFixture<JoinMomahidounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinMomahidounComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinMomahidounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
