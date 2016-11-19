/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KellyMonsterPageComponent } from './kelly-monster-page.component';

describe('KellyMonsterPageComponent', () => {
  let component: KellyMonsterPageComponent;
  let fixture: ComponentFixture<KellyMonsterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KellyMonsterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KellyMonsterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
