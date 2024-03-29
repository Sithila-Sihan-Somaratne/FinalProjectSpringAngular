import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassroomComponent } from './delete-classroom.component';

describe('DeleteClassroomComponent', () => {
  let component: DeleteClassroomComponent;
  let fixture: ComponentFixture<DeleteClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteClassroomComponent]
    });
    fixture = TestBed.createComponent(DeleteClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
