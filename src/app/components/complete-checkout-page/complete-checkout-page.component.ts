import { Component, OnInit } from '@angular/core';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA, KEY_ESTIMATION, KEY_ADDITIONAL_DATA } from '../../services/local-storage-service';
import { PolicyService, AccountService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-checkout-page',
  templateUrl: './complete-checkout-page.component.html',
})
export class CompleteCheckoutPageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router, private policyService: PolicyService, private accountService: AccountService) { }

  ngOnInit() {
      let additionalData = this.localStorageService.read(KEY_ADDITIONAL_DATA);
      console.log(additionalData);
      let publicID;
      let accountNumber
      this.accountService.createAccount("Alex", "Klein").then(acc => {
          accountNumber = acc.accountNumber;
          return this.policyService.createLiabillityPolicyPeriodSet(accountNumber, "tc_silver");
      }).then(set => {
          publicID = set.publicID;
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendBindOrder(publicID);
      }).then(() => {
          return this.policyService.createLegalProtectionPolicyPeriodSet(accountNumber, "500", "true");
      }).then(set => {
          publicID = set.publicID;
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendBindOrder(publicID);
      }).then(() => {
          console.log("Great Success");
      }).catch(err => {
          console.log(err);
      });

  }

}
