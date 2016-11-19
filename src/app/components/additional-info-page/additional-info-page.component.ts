import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../services';
import { Router } from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA, KEY_ESTIMATION, KEY_ADDITIONAL_DATA } from '../../services/local-storage-service';

@Component({
  selector: 'app-additional-info-page',
  templateUrl: './additional-info-page.component.html',
})
export class AdditionalInfoPageComponent implements OnInit {
	deductible: string[] = ['0€', '150€', '250€', '500€', '1000€'];
	deductibleCodes: string[] = ['0', '150', '250', '500', '1000'];

    coverageType: string[] = ['Bronze', 'Silver', 'Gold'];
    coverageTypeCodes: string[] = ['tc_bronze', 'tc_silver', 'tc_gold'];


    _selectedDeductible_HA: number = 1;
    _selectedDeductible_RS: number = 2;

    _selectedCoverageType_HA: number = 1;
    _selectedCoverageType_RS: number = 1;

    _familyStatus: string;

    isEstimating = false;

    insuranceCosts: Array<number> = [];

    constructor(private localStorageService: LocalStorageService, private router: Router, private policyService: PolicyService) { }

    ngOnInit() {
        let storedEstimation = this.localStorageService.read(KEY_ESTIMATION);
        this.insuranceCosts.push(storedEstimation["estimation"]);
    }

    get selectedDeductible_HA(): number {
        return this._selectedDeductible_HA;
    }

    get selectedDeductible_RS(): number {
        return this._selectedDeductible_RS;
    }

    get selectedCoverageType_HA(): number {
        return this._selectedCoverageType_HA;
    }

    get selectedCoverageType_RS(): number {
        return this._selectedCoverageType_RS;
    }

    get familyStatus(): string {
        return this._familyStatus;
    }

    set selectedDeductible_HA(value: number) {
        this._selectedDeductible_HA = value;
        this.recalculate();
    }

    set selectedDeductible_RS(value: number) {
        this._selectedDeductible_RS = value;
        this.recalculate();
    }

    set selectedCoverageType_HA(value: number) {
        this._selectedCoverageType_HA = value;
        this.recalculate();
    }

    set selectedCoverageType_RS(value: number) {
        this._selectedCoverageType_RS = value;
        this.recalculate();
    }

    set familyStatus(value: string) {
        this._familyStatus = value;
        this.recalculate();
    }

    recalculate() {
        this.insuranceCosts = [];
        this.isEstimating = true;
        this.policyService.getLegalProtectionRating(this.deductibleCodes[this._selectedDeductible_RS], "false").then((rating) => {
            this.insuranceCosts.push(rating.grossPrice);
            return this.policyService.getLiabilityRating(this.coverageTypeCodes[this._selectedCoverageType_HA]);
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
        let additionalData = {
            familyStatus: this.familyStatus,
            selectedDeductible_HA: this.selectedDeductible_HA,
            selectedDeductible_RS: this.selectedDeductible_RS,
            selectedCoverageType_HA: this.selectedCoverageType_HA,
            selectedCoverageType_RS: this.selectedCoverageType_RS
        };
        this.localStorageService.write(KEY_ADDITIONAL_DATA, additionalData);
        this.router.navigate(['/complete-checkout']);
    }

}
