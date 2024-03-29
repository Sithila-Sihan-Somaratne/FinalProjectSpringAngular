import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTeacherPageComponent } from './common-teacher-page.component';

describe('CommonTeacherPageComponent', () => {
  let component: CommonTeacherPageComponent;
  let fixture: ComponentFixture<CommonTeacherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTeacherPageComponent]
    });
    fixture = TestBed.createComponent(CommonTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
