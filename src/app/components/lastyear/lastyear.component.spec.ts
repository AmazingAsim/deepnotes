/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LastyearComponent } from './lastyear.component';

describe('LastyearComponent', () => {
  let component: LastyearComponent;
  let fixture: ComponentFixture<LastyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
