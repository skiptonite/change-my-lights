import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedStateComponent } from './led-state.component';

describe('LedStateComponent', () => {
  let component: LedStateComponent;
  let fixture: ComponentFixture<LedStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
