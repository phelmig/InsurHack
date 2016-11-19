/* 	
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ph (team InsuReco)
*/

/**
 * Interface for `Create PolicyPeriod_Set`  responses
 *
 * We mock: CoverageParts->CovTerms - The listing what excactly is ensured and to which conditions
 * An example Object can be found as a comment in this interface
 * 
 */
export interface ICreatePolicyPeriodSetResponse {

	/**
	 * The unique identifier - format pc:<numeric ID>
	 * @type {string}
	 */
	publicID: string;

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
	 * The policy sets' status (e.g. tc_draft)
	 *
	 * https://api.insurhack.com/gi-doc/index.html#/pc/data-dictionary/enums/PolicyPeriodStatus
	 * Type: zde.enums.PolicyPeriodStatus
	 * 
	 * tc_AuditComplete	Completed
	 * tc_Binding	Binding
	 * tc_Bound	Bound
	 * tc_Canceling	Canceling
	 * tc_Declined	Declined
	 * tc_Draft	Draft
	 * tc_Expired	Expired
	 * tc_LegacyConversion	LegacyConversion
	 * tc_LockedPendingBind_Ext	
	 * tc_New	New
	 * tc_NonRenewed	Non-renewed
	 * tc_NonRenewing	Non-renewing
	 * tc_NotTaken	Not-Taken
	 * tc_NotTaking	Not-taking
	 * tc_Quoted	Quoted
	 * tc_Quoting	Quoting
	 * tc_Reinstating	Reinstating
	 * tc_Renewing	Renewing
	 * tc_Rescinded	Rescinded
	 * tc_Rescinding	Rescinding
	 * tc_Temporary	Temporary
	 * tc_Waived	Waived
	 * tc_Withdrawn	Withdrawn
	 * 
	 * @type {string}
	 */
	status: string;

	/**
	 * The policy number for this policy period. This value may be different from the core policy number on the associated Policy.
	 *
	 * @type: {string}
	 */
	policyNumber: string; 


	/**
	 * PolicyStartDate - Format YYYY-MM-DD
	 * @type {string}
	 */
	policyStartDate: string;


	/**
	 * Beinhaltet Rechtsschutz
	 * @type {boolean}
	 */
	rsLineExists: boolean;
	
	/**
	 * Beinhaltet Mobilschutz
	 * @type {boolean}
	 */
	msLineExists: boolean;

	/**
	 * Beinhaltet Haftpflicht
	 * @type {boolean}
	 */
	haLineExists: boolean;

	/**
	 * Beinhaltet Hausrat
	 * @type {boolean}
	 */
	hrLineExists: boolean;

	/*
	{
                "PatternCode": "HA_PHVBenefitReductionNPLPLTerm",
                "ValueAsString": "tc_no_benefit_reduction",
                "ModelType": "tc_Other",
                "Pattern": {
                  "Name": "Selbstbeteiligung je Versicherungsfall (mit Beitragsnachlass)",
                  "Required": true,
                  "Description": "",
                  "ClausePattern": {
                    "Name": "Privathaftpflicht",
                    "Description": "",
                    "ReferenceDateByType": "tc_ApplicableObject",
                    "RefCode": null,
                    "CoverageCategoryID": "HA_PHVBaseCat",
                    "OwningEntityType": "GLPHVCovPart_ZDE",
                    "ClauseName": "Deckung",
                    "PublicID": "HA_PHVbaseCov",
                    "ODataCustomRemove": null
                  },
                  "ModelType": "tc_Other",
                  "ValueTypeName": "Typekey",
                  "PublicID": "HA_PHVBenefitReductionNPLPLTerm",
                  "ODataCustomRemove": null
                },
                "ValueTypeName": "Typekey",
                "DisplayValue": "Keine Leistungskürzung",
                "DisplayName": "Selbstbeteiligung je Versicherungsfall (mit Beitragsnachlass)",
                "ODataCustomRemove": null
              },
	 */
	//covTerms: object;

	//coverageParts: object;


}
