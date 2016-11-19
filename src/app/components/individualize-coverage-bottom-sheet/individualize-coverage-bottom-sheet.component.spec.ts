/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndividualizeCoverageBottomSheetComponent } from './individualize-coverage-bottom-sheet.component';

describe('IndividualizeCoverageBottomSheetComponent', () => {
  let component: IndividualizeCoverageBottomSheetComponent;
  let fixture: ComponentFixture<IndividualizeCoverageBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualizeCoverageBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualizeCoverageBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
