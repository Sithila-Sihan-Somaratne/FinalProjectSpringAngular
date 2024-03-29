import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeacherComponent } from './search-teacher.component';

describe('SearchTeacherComponent', () => {
  let component: SearchTeacherComponent;
  let fixture: ComponentFixture<SearchTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTeacherComponent]
    });
    fixture = TestBed.createComponent(SearchTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
