import { Component, OnInit } from '@angular/core';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA, KEY_ESTIMATION, KEY_ADDITIONAL_DATA } from '../../services/local-storage-service';
import { PolicyService, AccountService } from '../../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finalize-contract-page',
  templateUrl: './finalize-contract-page.component.html',
  styleUrls: ['./finalize-contract-page.component.styl']
})
export class FinalizeContractPageComponent implements OnInit {

  isFinalizing: boolean = true;

  constructor(private localStorageService: LocalStorageService, private router: Router, private policyService: PolicyService, private accountService: AccountService) { };

  ngOnInit() {
      let additionalData = this.localStorageService.read(KEY_ADDITIONAL_DATA);
      let accountData = this.localStorageService.read(KEY_ACCOUNT_DATA);
      let publicID;
      let accountNumber
      console.log(accountData);
      console.log(additionalData);
      this.accountService.createAccount(accountData["firstName"],accountData["lastName"]).then(acc => {
          accountNumber = acc.accountNumber;
          return this.policyService.createLiabillityPolicyPeriodSet(accountNumber, additionalData["selectedCoverageType_HA"]);
      }).then(set => {
          publicID = set.publicID;
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendBindOrder(publicID);
      }).then(() => {
          return this.policyService.createLegalProtectionPolicyPeriodSet(accountNumber, additionalData["selectedDeductible_RS"], String(additionalData["selectedWork_RS"]));
      }).then(set => {
          publicID = set.publicID;
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendQuoteOffer(publicID);
      }).then(() => {
          return this.policyService.sendBindOrder(publicID);
      }).then(() => {
          this.isFinalizing = false;
          this.router.navigate(['/kelly-monster']);
      }).catch(err => {
          console.log(err);
      });
  }

}
