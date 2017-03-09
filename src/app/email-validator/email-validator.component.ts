import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-model-email',
  template: `<form #f="ngForm">
                <input type="email" ngModel [email]="true" name="email">
                 <input type="button" [disabled]="f.invalid" value="enviar">
             </form>`
})
export class EmailValidatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
