export const policyLegalProtectionPayload = {
   "EffectiveDatedFields": {"TermType_ZDE": "tc_five_years"},
   "Policy":    {
      "ProductCode": "NPLPL_NewPersonalProduct",
      "Account": {"AccountNumber": "10000035984"}
   },
   "TermEndDate_ZDE": "2017-07-12",
   "PolicyStartDate": "2016-07-12",
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
};