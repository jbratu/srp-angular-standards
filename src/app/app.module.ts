import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommunicationWithServiceComponent } from './howto/communication-with-service/communication-with-service.component';

import { HttpApiCallsComponent } from './howto/http-api-calls/http-api-calls.component';

import { CardinalComponent } from './howto/communication-with-service/cardinal/cardinal.component';
import { SparrowComponent } from './howto/communication-with-service/sparrow/sparrow.component';
import { SetStyleFromCodeComponent } from './howto/set-style-from-code/set-style-from-code.component';
import { HowtoComponent } from './howto/howto.component';
import { ControlErrorMessageDirective } from './howto/control-error-message/control-error-message.directive';
import { ControlErrorMessageComponent } from './howto/control-error-message/control-error-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CommunicationWithServiceComponent,
    HowtoComponent,
    SetStyleFromCodeComponent,
    CardinalComponent,
    SparrowComponent,
    ControlErrorMessageComponent,
    ControlErrorMessageDirective,
    HttpApiCallsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
