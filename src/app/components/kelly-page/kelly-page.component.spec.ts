/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KellyPageComponent } from './kelly-page.component';

describe('KellyPageComponent', () => {
  let component: KellyPageComponent;
  let fixture: ComponentFixture<KellyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KellyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KellyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
