import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassroomComponent } from './update-classroom.component';

describe('UpdateClassroomComponent', () => {
  let component: UpdateClassroomComponent;
  let fixture: ComponentFixture<UpdateClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateClassroomComponent]
    });
    fixture = TestBed.createComponent(UpdateClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
