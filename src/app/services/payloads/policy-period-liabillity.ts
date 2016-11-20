export const policyLiabillityPayload = {
   "EffectiveDatedFields":    {
      "RateType_ZDE": "tc_normal",
      "TermType_ZDE": "tc_two_years"
   },
   "Policy":    {
      "ProductCode": "NPLPL_NewPersonalProduct",
      "Account": {"AccountNumber": "10000013763"}
   },
   "UWCompanyCode": "tc_21",
   "HALine": {"CoverageParts_ZDE": [   {
      "ScheduleCoverages": [      {
         "PatternCode": "HA_PHVbaseCov",
         "Pattern": {"PublicID": "HA_PHVbaseCov"},
         "CovTerms":          [
                        {
               "ValueAsString": "tc_no_benefit_reduction",
               "Pattern": {"PublicID": "HA_PHVBenefitReductionNPLPLTerm"}
            },
                        {
               "ValueAsString": "200",
               "Pattern": {"PublicID": "HA_PHVBenefitReductionLossAmmountTerm"}
            }
         ]
      }],
      "CoverageConcept": "tc_silver",
      "TargetGroup": "tc_Famliy",
      "Subline": "tc_ha_phv",
      "@odata.type": "#zde.entities.GLPHVCovPart_ZDE"
   }]},
   "PolicyStartDate": "2016-08-01"
};