import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtnComponent } from './buttn.component';

describe('ButtnComponent', () => {
  let component: ButtnComponent;
  let fixture: ComponentFixture<ButtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
