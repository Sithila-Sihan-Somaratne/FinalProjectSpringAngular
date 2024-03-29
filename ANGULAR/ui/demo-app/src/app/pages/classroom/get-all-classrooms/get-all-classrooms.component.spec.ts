import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClassroomsComponent } from './get-all-classrooms.component';

describe('GetAllClassroomsComponent', () => {
  let component: GetAllClassroomsComponent;
  let fixture: ComponentFixture<GetAllClassroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllClassroomsComponent]
    });
    fixture = TestBed.createComponent(GetAllClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
