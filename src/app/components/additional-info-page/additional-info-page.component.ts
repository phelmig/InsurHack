import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-additional-info-page',
  templateUrl: './additional-info-page.component.html',
})
export class AdditionalInfoPageComponent implements OnInit {
	deductible: string[] = ['0 €', '150 €', '250 €', '500 €', '1000 €'];
	deductibleCodes: string[] = ['tc_no_deductible', 'tc_150_eur', 'tc_250_eur', 'tc_500_eur', 'tc_1000_eur'];

    coverageType: string[] = ['Bronze', 'Silver', 'Gold'];
    coverageTypeCodes: string[] = ['tc_bronze', 'tc_silver', 'tc_gold'];


    private selectedDeductible_HA: number = 1;
    private selectedDeductible_RS: number = 2;

    private selectedCoverageType_HA: number = 1;
    private selectedCoverageType_RS: number = 1;

    constructor() { }

    ngOnInit() {
    }

}
