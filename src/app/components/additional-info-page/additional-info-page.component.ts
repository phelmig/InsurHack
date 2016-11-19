import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-additional-info-page',
  templateUrl: './additional-info-page.component.html',
})
export class AdditionalInfoPageComponent implements OnInit {
	Selbstbeteiligung: string[] = ['0 €', '150 €', '250 €', '500 €', '1000 €'];
	Selbstbeteiligung_out: string[] = ['tc_no_deductible', 'tc_150_eur', 'tc_250_eur', 'tc_500_eur', 'tc_1000_eur'];

  private selectedSB_HA: number = 1;
  private selectedSB_RS: number = 2;
  constructor() { }

  ngOnInit() {
  }

}
