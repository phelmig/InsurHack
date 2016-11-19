import { Component } from '@angular/core';
import { PolicyApi } from '../swagger/api/PolicyApi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PolicyApi]
})
export class AppComponent {

  title = 'Hello World!';

  constructor(policyApi: PolicyApi) {
      policyApi.policyPeriodSetGet().subscribe( (response) => {
          console.log(response);
      });
  }
}
