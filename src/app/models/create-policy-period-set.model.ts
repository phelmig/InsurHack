/* 	
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ph (team InsuReco)
*/

/**
 * Interface for `Create PolicyPeriod_Set`  responses
 */
export interface ICreatePolicyPeriodSetResponse {
	/**
	 * The term over which the policy is active (e.g. a year=tc_one_year)
	 *
	 * Possible Values:
	 * tc_Annual	Annual
	 * tc_HalfYear	6 months
	 * tc_Other	Other
	 * tc_two_years	

	 * @type {string}
	 */
	termType: string;

	/**
	 * The end of the defined term as YYYY-MM-DD (e.g. 2017-11-06)
	 * @type {string}
	 */
	termEndDate: string;

	/**
	 * The set 
	 * @type {string}
	 */
	status: string;

}
