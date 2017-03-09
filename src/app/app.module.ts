import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { EmailValidatorComponent } from './email-validator/email-validator.component';
import { EqualValidatorComponent } from './equal-validator/equal-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    EmailValidatorComponent,
    EqualValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
