import { Component } from '@angular/core';
import { PolicyService, AccountService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PolicyService, AccountService]
})
export class AppComponent {

    title = 'Hello World!';

    constructor(policyService: PolicyService, accountService: AccountService) {
        let publicID;
        policyService.getLiabilityRating().then(() => {
            return accountService.createAccount("Alex", "Klein");
        }).then(acc => {
            return policyService.createLiabillityPolicyPeriodSet(acc.accountNumber);
        }).then(set => {
            publicID = set.publicID;
            return policyService.sendQuoteOffer(publicID);
        }).then(() => {
            return policyService.sendQuoteOrder(publicID);
        }).then(() => {
             return policyService.sendBindOrder(publicID);
        }).then(() => {
             console.log("Great success");
        }).catch(err => {
            console.log(err);
        });
    }
}