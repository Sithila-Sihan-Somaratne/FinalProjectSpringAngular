import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTeacherPageComponent } from './start-teacher-page.component';

describe('StartTeacherPageComponent', () => {
  let component: StartTeacherPageComponent;
  let fixture: ComponentFixture<StartTeacherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartTeacherPageComponent]
    });
    fixture = TestBed.createComponent(StartTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
