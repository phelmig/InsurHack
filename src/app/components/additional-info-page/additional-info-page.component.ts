import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services';

@Component({
  selector: 'app-additional-info-page',
  templateUrl: './additional-info-page.component.html',
})
export class AdditionalInfoPageComponent implements OnInit {
	deductible: string[] = ['0€', '150€', '250€', '500€', '1000€'];
	deductibleCodes: string[] = ['tc_no_deductible', 'tc_150_eur', 'tc_250_eur', 'tc_500_eur', 'tc_1000_eur'];

    coverageType: string[] = ['Bronze', 'Silver', 'Gold'];
    coverageTypeCodes: string[] = ['tc_bronze', 'tc_silver', 'tc_gold'];


    selectedDeductible_HA: number = 1;
    selectedDeductible_RS: number = 2;

    selectedCoverageType_HA: number = 1;
    selectedCoverageType_RS: number = 1;

    familyStatus: string;

    isEstimating = true;

    insuranceCosts: Array<number> = [];

    constructor(private policyService: PolicyService) { }

    ngOnInit() {
        this.insuranceCosts = [];
        this.policyService.getLegalProtectionRating("500", "true").then((rating) => {
            this.insuranceCosts.push(rating.grossPrice);
            return this.policyService.getLiabilityRating("tc_silver");
        }).then((rating) => {
            this.insuranceCosts.push(rating.grossPrice);
            this.insuranceCosts.push(100);
            this.insuranceCosts.push(100);
            this.insuranceCosts.push(100);
            this.isEstimating = false;
        })
    }

    getEstimatedPremium() {
        let costs = 0;
        for(let price of this.insuranceCosts) {
            costs += price;
        }
        return costs;
    }

    getEstimationStatus() {
        return this.isEstimating;
    }

    onSubmit() {
        console.log("Test");
    }

}
