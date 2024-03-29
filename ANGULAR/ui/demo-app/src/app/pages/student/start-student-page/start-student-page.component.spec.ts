import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStudentPageComponent } from './start-student-page.component';

describe('StartStudentPageComponent', () => {
  let component: StartStudentPageComponent;
  let fixture: ComponentFixture<StartStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartStudentPageComponent]
    });
    fixture = TestBed.createComponent(StartStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
