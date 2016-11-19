import { AccountApi } from '../swagger/api/AccountApi'
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyService {

    protected accountApi: AccountApi;
    
    constructor(accountApi: AccountApi) {
      this.accountApi = accountApi;
    }

    createAccount() {
        
    }

}