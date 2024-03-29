import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeacherComponent } from './delete-teacher.component';

describe('DeleteTeacherComponent', () => {
  let component: DeleteTeacherComponent;
  let fixture: ComponentFixture<DeleteTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTeacherComponent]
    });
    fixture = TestBed.createComponent(DeleteTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
