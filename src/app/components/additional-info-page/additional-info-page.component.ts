import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { PolicyService } from '../../services';
import { IPolicy } from '../../models/policy.model';
import { Router } from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA, KEY_ESTIMATION, KEY_ADDITIONAL_DATA } from '../../services/local-storage-service';

@Component({
  selector: 'app-additional-info-page',
  templateUrl: './additional-info-page.component.html',
  host: {
        '[@routeAnimation]': 'true'
    },
    animations: [
        trigger('routeAnimation', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)' }),
                animate('100ms ease-in-out')
            ]),
            transition('* => void', [
                style({ transform: 'translateX(-100%)' }),
                animate('100ms ease-in-out')
            ])
        ])
    ]
})
export class AdditionalInfoPageComponent implements OnInit {
	deductible: string[] = ['150€', '250€', '500€'];
	deductibleCodes: string[] = ['150', '250', '500'];

    coverageType: string[] = ['Bronze', 'Silver', 'Gold'];
    coverageTypeCodes: string[] = ['tc_bronze', 'tc_silver', 'tc_gold'];


    _selectedDeductible_HA: number = 1;
    _selectedDeductible_RS: number = 2;

    _selectedCoverageType_HA: number = 1;
    _selectedCoverageType_RS: number = 1;

    _familyStatus: string;

    _workRS: boolean = false;

    isEstimating = false;

    insuranceCosts: Array<number> = [];

    policies: Array<IPolicy>;

    constructor(private localStorageService: LocalStorageService, private router: Router, private policyService: PolicyService) { }

    ngOnInit() {
        let storedEstimation = this.localStorageService.read(KEY_ESTIMATION);
        this.policies = <Array<IPolicy>> this.localStorageService.read(KEY_POLICY_DATA);
        console.log(this.policies);
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

    get workRS(): boolean {
        return this._workRS;
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

    set workRS(value: boolean) {
        this._workRS = value;
        this.recalculate();
    }

    recalculate() {
        this.insuranceCosts = [];
        this.isEstimating = true;
        console.log("workRS", String(this.workRS));
        this.policyService.getLegalProtectionRating(this.deductibleCodes[this._selectedDeductible_RS], String(this.workRS)).then((rating) => {
            this.insuranceCosts.push(rating.grossPrice);
            return this.policyService.getLiabilityRating(this.coverageTypeCodes[this._selectedCoverageType_HA]);
        }).then((rating) => {
            this.insuranceCosts.push(rating.grossPrice);
            //Occupational Incapacity
            this.insuranceCosts.push(230);
            //Accident
            this.insuranceCosts.push(80);
            //Household
            this.insuranceCosts.push(37);
            this.isEstimating = false;
        })
    }

    getEstimatedPremium() {
        let costs = 0;
        for(let i in this.insuranceCosts) {
            if (this.policies[i].selected)
                costs += this.insuranceCosts[i];
        }
        return costs;
    }

    getEstimationStatus() {
        return this.isEstimating;
    }

    onSubmit() {
        let additionalData = {
            familyStatus: this.familyStatus,
            selectedDeductible_HA: this.deductibleCodes[this.selectedDeductible_HA],
            selectedDeductible_RS: this.deductibleCodes[this.selectedDeductible_RS],
            selectedCoverageType_HA: this.coverageTypeCodes[this.selectedCoverageType_HA],
            selectedCoverageType_RS: this.coverageTypeCodes[this.selectedCoverageType_RS],
            selectedWork_RS: this.workRS
        };
        this.localStorageService.write(KEY_ADDITIONAL_DATA, additionalData);
        this.localStorageService.write(KEY_ESTIMATION, {"estimation": this.getEstimatedPremium()});
        this.router.navigate(['/complete-checkout']);
    }

}
