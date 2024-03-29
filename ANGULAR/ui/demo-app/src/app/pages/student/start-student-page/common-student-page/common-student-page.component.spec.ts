import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStudentPageComponent } from './common-student-page.component';

describe('CommonStudentPageComponent', () => {
  let component: CommonStudentPageComponent;
  let fixture: ComponentFixture<CommonStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonStudentPageComponent]
    });
    fixture = TestBed.createComponent(CommonStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
