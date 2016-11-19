/* 	
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ph (team InsuReco)
*/

/**
 * Interface for GetRating responses
 */
export interface IGetRatingResponse {
	/**
	 * The term over which the policy is active (e.g. a year=tc_one_year)
	 * @type {string}
	 */
	termType: string;

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
	 * @type {string}
	 */
	currency: string;

	/**
	 * The payment TERM (e.g. tc_monthly)
	 * @type {string}
	 */
	PaymentMethod: string;
}
