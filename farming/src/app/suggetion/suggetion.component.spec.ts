import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggetionComponent } from './suggetion.component';

describe('SuggetionComponent', () => {
  let component: SuggetionComponent;
  let fixture: ComponentFixture<SuggetionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggetionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
