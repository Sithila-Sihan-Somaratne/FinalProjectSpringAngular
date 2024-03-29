import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartClassroomPageComponent } from './start-classroom-page.component';

describe('StartClassroomPageComponent', () => {
  let component: StartClassroomPageComponent;
  let fixture: ComponentFixture<StartClassroomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartClassroomPageComponent]
    });
    fixture = TestBed.createComponent(StartClassroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
