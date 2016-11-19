import { Component } from '@angular/core';
import { PolicyService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PolicyService]
})
export class AppComponent {

    title = 'Hello World!';

    constructor(policyService: PolicyService) {
      policyService.getLiabilityRating();
    }
}
