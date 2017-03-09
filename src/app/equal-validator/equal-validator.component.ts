import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-equal-validator',
  templateUrl: './equal-validator.component.html',
})
export class EqualValidatorComponent implements OnInit {

  user: FormGroup;
  igual: any;
  equalTo: ValidatorFn;

  constructor() {
  }

  ngOnInit() {
    let emailControl = new FormControl('valor A', []);
    this.user = new FormGroup({
      email: emailControl,
      confirm: new FormControl('valor B', [])
    });

    this.equalTo = Validators.equalsTo('email', 'confirm' );
  }

  isEqual() {
    this.igual = this.equalTo(this.user.controls[ 'email' ]);
    console.log('é igual?', this.igual);
  }

}
