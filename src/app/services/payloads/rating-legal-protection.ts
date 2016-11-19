export const ratingLegalProtectionPayload = {"PolicyPeriod": {
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
   "PolicyStartDate": "2016-11-07",
   "RSLine": {"CoverageParts": [   {
      "ScheduleCoverages": [      {
         "Pattern": {"PublicID": "RS_PersonaJobCov"},
         "CovTerms":          [
                        {
               "ValueAsString": "250",
               "Pattern": {"PublicID": "RS_PersonaJob_ExcessPerCaseTerm"}
            },
            {
               "ValueAsString": "true",
               "Pattern": {"PublicID": "RS_PersonaJob_WorkSyncTerm"}
            }
         ]
      }],
      "CoverageConcept": "tc_bronze",
      "Subline": "tc_rs_privat_job"
   }]}
}}