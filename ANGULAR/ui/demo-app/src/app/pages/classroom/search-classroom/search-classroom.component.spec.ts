import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClassroomComponent } from './search-classroom.component';

describe('SearchClassroomComponent', () => {
  let component: SearchClassroomComponent;
  let fixture: ComponentFixture<SearchClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchClassroomComponent]
    });
    fixture = TestBed.createComponent(SearchClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
