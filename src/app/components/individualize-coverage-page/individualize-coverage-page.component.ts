import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA } from '../../services/local-storage-service';
import { IAccount } from '../../models/account.model';
import { IPolicy, PolicyType } from '../../models/policy.model';
import { PolicyService, AccountService } from '../../services';

@Component({
  selector: 'app-individualize-coverage-page',
  templateUrl: './individualize-coverage-page.component.html',
  styleUrls: ['./individualize-coverage-page.component.styl']
})
export class IndividualizeCoveragePageComponent implements OnInit {

    account: IAccount;

    _coverage: number;

    isEstimating = true;

    insuranceCosts: Array<number> = [];

    policies: Array<IPolicy> = [{
        name: "Personal Liability",
        type: PolicyType.PERSONAL_LIABILITY,
        description: "The smallest carelessness can quickly have devastating consequences, because especially in personal injury, high compensation is not a rarity. And you have to pay for the damage, possibly for a lifetime. With the Zurich private liability insurance, you and your family are protected best from the financial consequences.",
        insuranceCoverage: [
            ["For persons and property damage caused by you, on a flat rate", "5 Mio EUR"],
            ["Health insurance for personal injury and property damage, flat rate", "5 Mio EUR"],
            ["Property damage", "5 Mio EUR"],
            ["Rent damage, eg to buildings rented by you, living quarters", "1 Mio EUR"],
            ["Internet risk for damages caused by you through the exchange, transmission and provision of electronic data", "3 Mio EUR"],
            ["Loss of claim for damages that have been given to you by a third party and which could not be realized with it", "5 Mio EUR"]
            ],
        selected: true,
        level: 1
    },
    {
        name: "Legal Protection",
        type: PolicyType.LEGAL_PROTECTION,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        insuranceCoverage: [],
        selected: true,
        level: 1
    },
    {
        name: "Occupational Incapacity",
        type: PolicyType.OCCUPATIONAL_INCAPACITY,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        insuranceCoverage: [],
        level: 1
    },{
        name: "Accident",
        type: PolicyType.ACCIDENT,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        insuranceCoverage: [],
        level: 1
    },{
        name: "Household",
        type: PolicyType.HOUSEHOLD,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        insuranceCoverage: [],
        level: 1
    }];

    constructor(private localStorageService: LocalStorageService, private router: Router, private policyService: PolicyService) { }

    ngOnInit() {
        this.account = this.localStorageService.read(KEY_ACCOUNT_DATA);
        // if no account detail are found in local storage, redirect to first step
        if(!this.account) {
            this.router.navigate(['/personal-details']);
        }
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

        //rates here

        this.coverage = 2;
    }

    set coverage(coverage: number) {
        this.onCoverageChanged(coverage);
        this._coverage = coverage;
    }

    get coverage(): number {
        return this._coverage;
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

    onPolicySelectionChanged(policy: IPolicy, selected) {
        policy.selected = selected;
    }

    isValid() {
        return this.policies.filter(policy => {
            return policy.selected
        }).length > 0;
    }

    onSubmit() {
        this.localStorageService.write(KEY_POLICY_DATA, this.policies);
        this.router.navigate(['/additional-info']);
    }

    onCoverageChanged(coverage: number) {
        switch (coverage) {
            case 1:
                this.setPoliciesAccordingToBitmap([true, false, false, false, false]);
                break;
            case 2:
                this.setPoliciesAccordingToBitmap([true, true, false, false, false]);
                break;
            case 3:
                this.setPoliciesAccordingToBitmap([true, true, true, false, false]);
                break;
            case 4:
                this.setPoliciesAccordingToBitmap([true, true, true, true, true]);
                break;
        }
    }

    setPoliciesAccordingToBitmap(bitmap: Array<boolean>) {
        this.policies.forEach((policy, i) => {
            policy.selected = bitmap[i];
        });
    }

}
