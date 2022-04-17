/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstyearComponent } from './firstyear.component';

describe('FirstyearComponent', () => {
  let component: FirstyearComponent;
  let fixture: ComponentFixture<FirstyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
