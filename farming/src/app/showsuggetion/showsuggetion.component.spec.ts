import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsuggetionComponent } from './showsuggetion.component';

describe('ShowsuggetionComponent', () => {
  let component: ShowsuggetionComponent;
  let fixture: ComponentFixture<ShowsuggetionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsuggetionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsuggetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
