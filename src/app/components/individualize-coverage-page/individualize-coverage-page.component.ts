import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA } from '../../services/local-storage-service';
import { IAccount } from '../../models/account.model';
import { IPolicy, PolicyType } from '../../models/policy.model';

@Component({
  selector: 'app-individualize-coverage-page',
  templateUrl: './individualize-coverage-page.component.html',
  styleUrls: ['./individualize-coverage-page.component.styl']
})
export class IndividualizeCoveragePageComponent implements OnInit {

    account: IAccount;

    coverage: number = 3;

    policies: Array<IPolicy> = [{
        name: "Personal Liability",
        type: PolicyType.PERSONAL_LIABILITY,
        description: "",
        selected: true,
        level: 1
    },
    {
        name: "Legal Protection",
        type: PolicyType.LEGAL_PROTECTION,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: true,
        level: 1
    },
    {
        name: "Occupational Incapacity",
        type: PolicyType.OCCUPATIONAL_INCAPACITY,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        level: 1
    },{
        name: "Accident",
        type: PolicyType.ACCIDENT,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        level: 1
    },{
        name: "Household",
        type: PolicyType.HOUSEHOLD,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante eu ex aliquet maximus a vitae nisl. Curabitur ultricies imperdiet magna, ut dictum tellus posuere non. Sed sodales quam eu luctus sodales. Quisque varius est iaculis, consequat lacus quis, blandit arcu.",
        selected: false,
        level: 1
    }];

    constructor(private localStorageService: LocalStorageService, private router: Router) { }

    ngOnInit() {
        this.account = this.localStorageService.read(KEY_ACCOUNT_DATA);
        // if no account detail are found in local storage, redirect to first step
        if(!this.account) {
            this.router.navigate(['/personal-details']);
        }
    }

    getEstimatedPremium() {
        return 142.29 + this.coverage * 12.3;
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

    onLevelChanged(level: number) {
        switch (level) {
            case 1:
                // code...
                break;
            
            default:
                // code...
                break;
        }
    }

    setPoliciesAccordingToBitmap(bitmap: Array<boolean>) {
        this.policies.forEach((policy, i) => {
            policy.selected = bitmap[i];
        });
    }

}
