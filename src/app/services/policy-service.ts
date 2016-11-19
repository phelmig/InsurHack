/*     
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ak (team InsuReco)
*/

import { PolicyApi } from '../swagger/api/PolicyApi'
import { Injectable } from '@angular/core';
import { ratingLiabilityPayload } from './payloads/rating-liability';
import { ratingLegalProtectionPayload } from './payloads/rating-legal-protection';
import { policyPeriodLiabillity } from './payloads/policy-period-liabillity';
import { policyLegalProtectionPayload } from './payloads/policy-period-legal-protection';
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
     * @return {Promise<IGetRatingResponse>} The get rating response
     */
    getLiabilityRating(coverageConcept: string): Promise<IGetRatingResponse> {
        var parameter = ratingLiabilityPayload;
        parameter["PolicyPeriod"]["HALine"]["CoverageParts_ZDE"][0]["CoverageConcept"] = coverageConcept;
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
     * Get legal protection rating
     * @param  {string}                      excessPerCaseTerm The xcess per case term
     * @param  {string}                      workSyncTerm      The work insurance
     * @return {Promise<IGetRatingResponse>}                   The get rating response
     */
    getLegalProtectionRating(excessPerCaseTerm: string, workSyncTerm: string): Promise<IGetRatingResponse> {
        var parameter = ratingLegalProtectionPayload;
        parameter["PolicyPeriod"]["RSLine"]["CoverageParts"][0]["ScheduleCoverages"][0]["CovTerms"][0]["ValueAsString"] = excessPerCaseTerm;
        parameter["PolicyPeriod"]["RSLine"]["CoverageParts"][0]["ScheduleCoverages"][0]["CovTerms"][1]["ValueAsString"] = workSyncTerm;
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
                console.log(model);
                return model;
            });
    }

    /**
     * Create liabillity policy period set
     * @param  {string}                                  accountNumber   The account number
     * @param  {string}                                  coverageConcept The coverage concept
     * @return {Promise<ICreatePolicyPeriodSetResponse>}                 The polic period set
     */
    createLiabillityPolicyPeriodSet(accountNumber: string, coverageConcept: string): Promise<ICreatePolicyPeriodSetResponse> {
        var parameter = policyLegalProtectionPayload;
        parameter["Policy"]["Account"]["AccountNumber"] = accountNumber;
        parameter["HALine"]["CoverageParts_ZDE"][0]["CoverageConcept"] = coverageConcept;
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
     * Create legal protection period set
     * @param  {string}                                  accountNumber     The account number
     * @param  {string}                                  excessPerCaseTerm The excess per case term
     * @param  {string}                                  workSyncTerm      The work insurance
     * @return {Promise<ICreatePolicyPeriodSetResponse>}                   The policy period set
     */
    createLegalProtectionPolicyPeriodSet(accountNumber: string, excessPerCaseTerm: string, workSyncTerm: string): Promise<ICreatePolicyPeriodSetResponse> {
        var parameter = policyLegalProtectionPayload;
        parameter["Policy"]["Account"]["AccountNumber"] = accountNumber;
        parameter["RSLine"]["CoverageParts"][0]["ScheduleCoverages"][0]["CovTerms"][0]["ValueAsString"] = excessPerCaseTerm;
        parameter["RSLine"]["CoverageParts"][0]["ScheduleCoverages"][0]["CovTerms"][1]["ValueAsString"] = workSyncTerm;
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
     * Send quote offer for a specific policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<ICreatePolicyPeriodSetResponse>}               The quote offer response
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
     * Send quote order a specific policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<ICreatePolicyPeriodSetResponse>}               The quote order response
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
     * Send bind order for a specific policy period set
     * @param  {string}                                  publicID The public identifier
     * @return {Promise<IBindOrderResponse>}               The bind order response
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