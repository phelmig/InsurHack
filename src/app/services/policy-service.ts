import { PolicyApi } from '../swagger/api/PolicyApi'
import { Injectable } from '@angular/core';
import { ratingLiabilityPayload } from './payloads/rating-liability';
@Injectable()
export class PolicyService {

    protected policyApi: PolicyApi;
    
    constructor(policyApi: PolicyApi) {
      this.policyApi = policyApi;
    }

    getLiabilityRating() {
        var parameter = ratingLiabilityPayload;
        this.policyApi.policyPeriodSetZdeActionsGetRatingPost(parameter).subscribe((response) => {
            console.log(response);
        })
    }

}