import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSidebarComponent } from './teacher-sidebar.component';

describe('TeacherSidebarComponent', () => {
  let component: TeacherSidebarComponent;
  let fixture: ComponentFixture<TeacherSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherSidebarComponent]
    });
    fixture = TestBed.createComponent(TeacherSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
