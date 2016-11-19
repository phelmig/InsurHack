export interface IPolicy {

    /**
     * The name of the kind of Policy
     * @type {string}
     */
    name: string;

    /**
     * The code of the kind of Policy
     * @type {PolicyType}
     */
    type: PolicyType;

    /**
     * Flag of whether the Policy is selected
     * @type {boolean}
     */
    selected: boolean;

    /**
     * The level of coverage for the Policy
     * @type {number}
     */
    level: number;

    /**
     * The description of the Policy
     * @type {string}
     */
    description: string;

    /**
     * The insurance coverage of the Policy
     * @type {any}
     */
    insuranceCoverage: Array<any>;
}

export enum PolicyType {
    PERSONAL_LIABILITY,
    LEGAL_PROTECTION,
    OCCUPATIONAL_INCAPACITY,
    ACCIDENT,
    HOUSEHOLD
}