/*  
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ph (team InsuReco)
*/

/**
 * Interface for QuoteOrder responses
 */
export interface IQuoteOrderResponse {

    /**
     * The term over which the policy is active (e.g. a year=tc_one_year)
     *
     * Possible Values:
     * tc_Annual    Annual
     * tc_HalfYear  6 months
     * tc_Other Other
     * tc_two_years 

     * @type {string}
     */termType: string;

    /**
     * The end of the defined term as YYYY-MM-DD (e.g. 2017-11-06)
     * @type {string}
     */
    termEndDate: string;

    /**
     * gross price (over the whole term) e.g. 160.22
     * @type {number}
     */
    grossPrice: number;

    /**
     * gross price over a payment period (e.g. per month)
     * @type {number}
     */
    grossPerPeriod: number;

    /**
     * The net price over the whole term
     * @type {number}
     */
    netPrice: number;

    /**
     * The policies currency (e.g. tc_eur)
     * tc_aud   AUD
     * tc_cad   CAD
     * tc_eur   EUR
     * tc_gbp   GBP
     * tc_jpy   JPY
     * tc_rub   RUB
     * tc_usd   USD
     * 
     * @type {string}
     */
    currency: string;

    /**
     * The payment TERM (e.g. tc_monthly)
     * ! Docu says otherwhise: https://api.insurhack.com/gi-doc/index.html#/pc/data-dictionary/enums/PaymentMethod
     * 
     * @type {string}
     */
    paymentMethod: string;
}
