/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondyearComponent } from './secondyear.component';

describe('SecondyearComponent', () => {
  let component: SecondyearComponent;
  let fixture: ComponentFixture<SecondyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
