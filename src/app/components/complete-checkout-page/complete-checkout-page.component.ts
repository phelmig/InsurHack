import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { IPaymentData } from '../../models/payment-data.model';
import { IPolicy } from '../../models/policy.model';
import { IAccount } from '../../models/account.model';
import { Router } from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA, KEY_POLICY_DATA, KEY_ESTIMATION, KEY_ADDITIONAL_DATA } from '../../services/local-storage-service';

@Component({
  selector: 'app-complete-checkout-page',
  templateUrl: './complete-checkout-page.component.html',
  styleUrls: ['./complete-checkout-page.component.styl'],
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
export class CompleteCheckoutPageComponent implements OnInit {

  paymentData: IPaymentData = {
      "IBAN": "DE89 3704 0044 0532 0130 00",
      "BIC": "37040044"
  };
  premium: number;
  policies: Array<IPolicy>;
  account: IAccount;

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
      let storedEstimation = this.localStorageService.read(KEY_ESTIMATION);
      let storedPolicies = <Array<IPolicy>> this.localStorageService.read(KEY_POLICY_DATA);
      this.policies = storedPolicies.filter(policy => policy.selected);
      this.premium = storedEstimation['estimation'];
      this.account = this.localStorageService.read(KEY_ACCOUNT_DATA);

      this.paymentData.firstName = this.account.firstName;
      this.paymentData.lastName = this.account.lastName;
  }

  onSubmit() {
      this.router.navigate(['/finalize-contract']);
  }

}
