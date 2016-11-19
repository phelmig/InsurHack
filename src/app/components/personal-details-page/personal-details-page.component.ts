import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { IAccount } from '../../models/account.model';
import { LocalStorageService, KEY_ACCOUNT_DATA } from '../../services/local-storage-service';

@Component({
  selector: 'app-personal-details-page',
  templateUrl: './personal-details-page.component.html',
  styleUrls: ['./personal-details-page.component.styl']
})
export class PersonalDetailsPageComponent implements OnInit {

    account: IAccount = {};

    constructor(private localStorageService: LocalStorageService, private router: Router) { }

    ngOnInit() {
      let storedAccount = this.localStorageService.read(KEY_ACCOUNT_DATA);
      if(storedAccount) {
        this.account = storedAccount;
      }
    }

    onSubmit(form: NgForm) {
        this.localStorageService.write(KEY_ACCOUNT_DATA, this.account);
        this.router.navigate(['/individualize-coverage'])
    }

}
