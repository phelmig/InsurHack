import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService, AccountService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PolicyService, AccountService]
})
export class AppComponent {

  title = 'Hello World!';

  constructor(policyService: PolicyService, accountService: AccountService, private router: Router) {
    // let publicID;
    // policyService.getLegalProtectionRating("500", "true").then(() => {
    //   return accountService.createAccount("Alex", "Klein");
    // }).then(acc => {
    //   return policyService.createLegalProtectionPolicyPeriodSet(acc.accountNumber, "500", "true");
    // }).then(set => {
    //   publicID = set.publicID;
    //   return policyService.sendQuoteOffer(publicID);
    // }).then(() => {
    //   return policyService.sendQuoteOrder(publicID);
    // }).then(() => {
    //   return policyService.sendBindOrder(publicID);
    // }).then((ins) => {
    //   console.log("Successful", ins);
    // }).catch(err => {
    //   console.log(err);
    // });

  }
  showMonsterBanner() {
    return this.router.url.indexOf('monster') >0;
  }
  doHideBanner() {
    return this.router.url === "/start" || this.router.url.indexOf('kelly') >0 ;
  }

}