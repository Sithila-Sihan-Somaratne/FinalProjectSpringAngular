import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomHeaderComponent } from './classroom-header.component';

describe('ClassroomHeaderComponent', () => {
  let component: ClassroomHeaderComponent;
  let fixture: ComponentFixture<ClassroomHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomHeaderComponent]
    });
    fixture = TestBed.createComponent(ClassroomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
