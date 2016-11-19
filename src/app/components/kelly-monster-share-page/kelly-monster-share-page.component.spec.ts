/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KellyMonsterSharePageComponent } from './kelly-monster-share-page.component';

describe('KellyMonsterSharePageComponent', () => {
  let component: KellyMonsterSharePageComponent;
  let fixture: ComponentFixture<KellyMonsterSharePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KellyMonsterSharePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KellyMonsterSharePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
