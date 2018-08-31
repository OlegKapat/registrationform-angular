import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { AuthorizationComponent } from './forms/authorization/authorization.component';
import { NotuseDirective } from './notuse.directive';
import { TestpageComponent } from './testpage/testpage.component';
import {AppRoutingModule} from '../app/app-routing.module';
import { ComonpageComponent } from './comonpage/comonpage.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent,
    NotuseDirective,
    TestpageComponent,
    ComonpageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
