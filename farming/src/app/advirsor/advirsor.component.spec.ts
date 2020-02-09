import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvirsorComponent } from './advirsor.component';

describe('AdvirsorComponent', () => {
  let component: AdvirsorComponent;
  let fixture: ComponentFixture<AdvirsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvirsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvirsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
