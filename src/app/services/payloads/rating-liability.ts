export const ratingLiabilityPayload = {"PolicyPeriod": {
   "EffectiveDatedFields":    {
      "RateType_ZDE": "tc_normal",
      "TermType_ZDE": "tc_one_year"
   },
   "Policy":    {
      "ProductCode": "NPLPL_NewPersonalProduct",
      "Account":       {
         "ProducerCodes_ZDE": [         {
            "Commission": 100,
            "ProducerCode": {"Code": "220000004"},
            "ProducerType": "tc_primproducerofservice"
         }],
         "AccountHolderContact":          {
            "DateOfBirth": "1980-08-01",
            "@odata.type": "#zde.entities.Person"
         }
      }
   },
   "HALine": {"CoverageParts_ZDE": [   {
      "CoverageConcept": "tc_silver",
      "Subline": "tc_ha_phv",
      "SimpleCoverages": [      {
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
      "@odata.type": "#zde.entities.GLPHVCovPart_ZDE"
   }]},
   "PolicyStartDate": "2016-11-07"
}}