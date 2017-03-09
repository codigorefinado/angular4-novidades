import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: [ './if-else.component.css' ]
})
export class IfElseComponent implements OnInit {

  nome: Observable<string>;

  constructor() {
  }

  ngOnInit() {
    this.nome =  new Observable(observer => {
      setTimeout(() => {
        observer.next('Clayton');
      }, 3000);

      setTimeout(() => {
        observer.next('Passos');
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 9000);
    });

  }

}
