/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstasurePageComponent } from './instasure-page.component';

describe('InstasurePageComponent', () => {
  let component: InstasurePageComponent;
  let fixture: ComponentFixture<InstasurePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstasurePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstasurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
