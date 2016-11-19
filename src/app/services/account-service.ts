/*     
(c) 2016 Alex Klein, Florian Reifschneider, Patrick Helmig
created for InsurHack 2016 by @ak (team InsuReco)
*/

import { AccountApi } from '../swagger/api/AccountApi'
import { Injectable } from '@angular/core';
import { createAccount } from './payloads/create-account';
import { ICreateAccountResponse } from '../models/create-account.model';

@Injectable()
export class AccountService {

    protected accountApi: AccountApi;
    
    constructor(accountApi: AccountApi) {
      this.accountApi = accountApi;
    }

    /**
     * Create a new account
     * @param {string} firstName The first name
     * @param {string} lastName  The last name
     */
    createAccount(firstName: string, lastName: string) {
        var parameter = createAccount;
        parameter["AccountHolderContact"]["FirstName"] = firstName;
        parameter["AccountHolderContact"]["LastName"] = lastName;
        
        return this.accountApi
            .accountSetPost(parameter)
            .toPromise()
            .then((res) => {
                let model:ICreateAccountResponse = {
                    accountNumber: res["AccountNumber"],
                    primaryLanguage: res["PrimaryLanguage"],
                    title: res["AccountHolderContact"]["Prefix"],
                    firstName: res["AccountHolderContact"]["FirstName"],
                    lastName: res["AccountHolderContact"]["LastName"],
                    city: res["AccountHolderContact"]["PrimaryAddress"]["City"],
                    street: res["AccountHolderContact"]["PrimaryAddress"]["AddressLine1"],
                    zip: res["AccountHolderContact"]["PrimaryAddress"]["PostalCode"]
                };
                //console.log(model);
                return model;
            });
    }

}