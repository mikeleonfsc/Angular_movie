import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListHTTPComponent } from './movie-list-http.component';

describe('MovieListHTTPComponent', () => {
  let component: MovieListHTTPComponent;
  let fixture: ComponentFixture<MovieListHTTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListHTTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
