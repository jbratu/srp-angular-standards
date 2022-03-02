import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommunicationWithServiceComponent } from './howto/communication-with-service/communication-with-service.component';
import { CardinalComponent } from './howto/communication-with-service/cardinal/cardinal.component';
import { SparrowComponent } from './howto/communication-with-service/sparrow/sparrow.component';
import { SetStyleFromCodeComponent } from './howto/set-style-from-code/set-style-from-code.component';
import { HowtoComponent } from './howto/howto.component';
import { ControlErrorMessageDirective } from './howto/control-error-message/control-error-message.directive';
import { ControlErrorMessageComponent } from './howto/control-error-message/control-error-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
