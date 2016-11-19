import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LocalStorageService, KEY_ACCOUNT_DATA } from '../../services/local-storage-service';
import { IAccount } from '../../models/account.model';


@Component({
  selector: 'app-individualize-coverage-page',
  templateUrl: './individualize-coverage-page.component.html',
})
export class IndividualizeCoveragePageComponent implements OnInit {

    account: IAccount;

    constructor(private localStorageService: LocalStorageService, private router: Router) { }

    ngOnInit() {
        this.account = this.localStorageService.read(KEY_ACCOUNT_DATA);
        // if no account detail are found in local storage, redirect to first step
        if(!this.account) {
            this.router.navigate(['/personal-details']);
        }
    }

}
