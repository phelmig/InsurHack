export interface IAccount {

    /**
     * The title of the Account
     * @type {string}
     */
    title?: string;

    /**
     * First name of the Account
     * @type {string}
     */
    firstName?: string;

    /**
     * Last name of the Account
     * @type {string}
     */
    lastName?: string;

    /**
     * The street name of the Account
     * @type {string}
     */
    streetName?: string;

    /**
     * The street number of the Account
     * @type {string}
     */
    streetNumber?: string;

    /**
     * The ZIP Code of the Account
     * @type {string}
     */
    zipCode?: string;

    /**
     * The city of the Account
     * @type {string}
     */
    city?: string;

    /**
     * The country code of the Account
     * @type {string}
     */
    countryCode?: string;

    /**
     * The email address of the Account
     * @type {[type]}
     */
    email?: string;

    /**
     * The IBAN of the Account
     * @type {string}
     */
    IBAN?: string;
}