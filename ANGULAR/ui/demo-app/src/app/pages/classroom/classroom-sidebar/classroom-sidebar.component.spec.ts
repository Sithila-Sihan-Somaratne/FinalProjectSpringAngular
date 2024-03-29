import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSidebarComponent } from './classroom-sidebar.component';

describe('ClassroomSidebarComponent', () => {
  let component: ClassroomSidebarComponent;
  let fixture: ComponentFixture<ClassroomSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomSidebarComponent]
    });
    fixture = TestBed.createComponent(ClassroomSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
