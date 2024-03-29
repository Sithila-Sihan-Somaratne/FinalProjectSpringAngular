import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonClassroomPageComponent } from './common-classroom-page.component';

describe('CommonClassroomPageComponent', () => {
  let component: CommonClassroomPageComponent;
  let fixture: ComponentFixture<CommonClassroomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonClassroomPageComponent]
    });
    fixture = TestBed.createComponent(CommonClassroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
