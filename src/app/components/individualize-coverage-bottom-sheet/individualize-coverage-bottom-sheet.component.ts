import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individualize-coverage-bottom-sheet',
  templateUrl: './individualize-coverage-bottom-sheet.component.html',
  styleUrls: ['./individualize-coverage-bottom-sheet.component.styl']
})
export class IndividualizeCoverageBottomSheetComponent implements OnInit {

  @Input() estimatedPremium: number;
  @Input() isEstimating: boolean;
  constructor() { }

  ngOnInit() {
  }

}
