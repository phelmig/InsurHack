/*     
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ph (team InsuReco)
*/

/**
 * Interface for `Create PolicyPeriod_Set`  responses
 */
export interface ICreateAccountResponse {
    
    /**
     * The unqiue account identifier
     * @type {string}
     */
    accountNumber: string;

    /**
     * The primary language the account holder
     * @type {string}
     */
    primaryLanguage: string;

    /**
     * The title of the account holder
     * @type {string}
     */
    title: string;

    /**
     * The first name of the account holder
     * @type {string}
     */
    firstName: string;

    /**
     * The last name of the account holder
     * @type {string}
     */
    lastName: string;

    /**
     * The street address of the account holder
     * @type {string}
     */
    street: string;

    /**
     * The ZIP Code of residence of the account holder
     * @type {string}
     */
    zip: string;

    /**
     * The City of the account holder
     * @type {string}
     */
    city: string;

}
