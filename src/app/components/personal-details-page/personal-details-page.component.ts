import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAccount } from '../../models/account.model';

@Component({
  selector: 'app-personal-details-page',
  templateUrl: './personal-details-page.component.html',
})
export class PersonalDetailsPageComponent implements OnInit {

    account: IAccount = {
        firstName: "",
        lastName: ""
    };

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(this.account);
    }

}
