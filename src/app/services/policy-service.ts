/*     
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ak (team InsuReco)
*/

import { PolicyApi } from '../swagger/api/PolicyApi'
import { Injectable } from '@angular/core';
import { ratingLiabilityPayload } from './payloads/rating-liability';
import { policyPeriodLiabillity } from './payloads/policy-period-liabillity';
import { IGetRatingResponse } from '../models/get-rating-response.model';
import { ICreatePolicyPeriodSetResponse} from '../models/create-policy-period-set.model';
import { IQuoteOfferResponse} from '../models/quote-offer.model';
import { IQuoteOrderResponse} from '../models/quote-order.model';
import { IBindOrderResponse} from '../models/bind-order.model';
import 'rxjs/add/operator/toPromise';

/**
 * Policy Service Class
 */
@Injectable()
export class PolicyService {

    protected policyApi: PolicyApi;
    
    constructor(policyApi: PolicyApi) {
      this.policyApi = policyApi;
    }

    /**
     * Get the rating for liability insurance
     * @return {Promise<IGetRatingResponse>} Returns the rating repsonse
     */
    getLiabilityRating(): Promise<IGetRatingResponse> {
        var parameter = ratingLiabilityPayload;
        return this.policyApi
            .policyPeriodSetZdeActionsGetRatingPost(parameter)
            .toPromise()
            .then((res) => {
                let model:IGetRatingResponse = {
                    termType: res["TermType_ZDE"],
                    termEndDate: res["TermEndDate_ZDE"],
                    grossPrice: res["CostsSummary"]["GrossPremium"]["Amount"],
                    grossPerPeriod: res["CostsSummary"]["GrossPremiumPerPaymentPeriod"]["Amount"],
                    netPrice: res["CostsSummary"]["NetPremium"]["Amount"],
                    currency: res["CostsSummary"]["NetPremium"]["Currency"],
                    paymentMethod: res["CostsSummary"]["PaymentMethod"]
                };
                //console.log(model);
                return model;
            });
    }

    /**
     * Create liabillity policy period set
     * @param  {string}                                  accountNumber The account number
     * @return {Promise<ICreatePolicyPeriodSetResponse>}               Returns the account response
     */
    createLiabillityPolicyPeriodSet(accountNumber: string): Promise<ICreatePolicyPeriodSetResponse> {
        var parameter = policyPeriodLiabillity;
        parameter["Policy"]["Account"]["AccountNumber"] = accountNumber;
        console.log(accountNumber, parameter["Policy"]["Account"]["AccountNumber"]);
        return this.policyApi
            .policyPeriodSetPost(parameter)
            .toPromise()
            .then((res) => {
                let model:ICreatePolicyPeriodSetResponse = {
                    publicID: res["PublicID"],
                    termType: res["TermType"],
                    termEndDate: res["TermEndDate_ZDE"],
                    status: res["Status"],
                    policyNumber: res["PolicyNumber"],
                    policyStartDate: "",
                    rsLineExists: false,
                    msLineExists: false,
                    haLineExists: true,
                    hrLineExists: false
                };
                //console.log(model);
                return model;
            });
    }

     /**
     * Send quote offer for liabillity policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<ICreatePolicyPeriodSetResponse>}               Returns the quote offer response
     */
    sendQuoteOffer(publicID: string): Promise<IQuoteOfferResponse> {
        console.log("publicID", publicID);
        return this.policyApi.policyPeriodSetpublicIDZdeActionsQuoteOfferPost(publicID, {})
            .toPromise()
            .then((res) => {
                let model:IQuoteOfferResponse = {
                    termType: res["TermType_ZDE"],
                    termEndDate: res["TermEndDate_ZDE"],
                    grossPrice: res["CostsSummary"]["GrossPremium"]["Amount"],
                    grossPerPeriod: res["CostsSummary"]["GrossPremiumPerPaymentPeriod"]["Amount"],
                    netPrice: res["CostsSummary"]["NetPremium"]["Amount"],
                    currency: res["CostsSummary"]["NetPremium"]["Currency"],
                    paymentMethod: res["CostsSummary"]["PaymentMethod"]
                };
                //console.log(model);
                return model;
            });
    }

     /**
     * Send quote order for liabillity policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<ICreatePolicyPeriodSetResponse>}               Returns the quote order response
     */
    sendQuoteOrder(publicID: string): Promise<IQuoteOrderResponse> {
        return this.policyApi.policyPeriodSetpublicIDZdeActionsQuoteOrderPost(publicID, {})
            .toPromise()
            .then((res) => {
                let model:IQuoteOrderResponse = {
                    termType: res["TermType_ZDE"],
                    termEndDate: res["TermEndDate_ZDE"],
                    grossPrice: res["CostsSummary"]["GrossPremium"]["Amount"],
                    grossPerPeriod: res["CostsSummary"]["GrossPremiumPerPaymentPeriod"]["Amount"],
                    netPrice: res["CostsSummary"]["NetPremium"]["Amount"],
                    currency: res["CostsSummary"]["NetPremium"]["Currency"],
                    paymentMethod: res["CostsSummary"]["PaymentMethod"]
                };
                //console.log(model);
                return model;
            });
    }

     /**
     * Send bind order for liabillity policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<IBindOrderResponse>}               Returns the bind order response
     */
    sendBindOrder(publicID: string): Promise<IBindOrderResponse> {
        return this.policyApi.policyPeriodSetpublicIDZdeActionsBindOrderPost(publicID, {})
            .toPromise()
            .then((res) => {
                let model:IBindOrderResponse = {
                    termType: res["TermType_ZDE"],
                    termEndDate: res["TermEndDate_ZDE"],
                    grossPrice: res["CostsSummary"]["GrossPremium"]["Amount"],
                    grossPerPeriod: res["CostsSummary"]["GrossPremiumPerPaymentPeriod"]["Amount"],
                    netPrice: res["CostsSummary"]["NetPremium"]["Amount"],
                    currency: res["CostsSummary"]["NetPremium"]["Currency"],
                    paymentMethod: res["CostsSummary"]["PaymentMethod"]
                };
                //console.log(model);
                return model;
            });
    }
}