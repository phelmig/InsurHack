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
        policyService.getLegalProtectionRating("500", "true").then(() => {
            return accountService.createAccount("Alex", "Klein");
        }).then(acc => {
             return policyService.createLegalProtectionPolicyPeriodSet(acc.accountNumber, "500", "true");
        }).then(set => {
          publicID = set.publicID;
          return policyService.sendQuoteOffer(publicID);
        }).then(() => {
           return policyService.sendQuoteOrder(publicID);
        }).then(() => {
            return policyService.sendBindOrder(publicID);
        }).then((ins) => {
           console.log("Successful", ins);
        }).catch(err => {
           console.log(err);
        });
    }
}