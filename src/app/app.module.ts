import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from "./app-routing.module";

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';

import { CardinalComponent } from "./pages/howto/communication-with-service/cardinal/cardinal.component";
import { SparrowComponent } from "./pages/howto/communication-with-service/sparrow/sparrow.component";
import { ControlErrorMessageComponent } from "./pages/howto/control-error-message/control-error-message.component";
import { ControlErrorMessageDirective } from "./pages/howto/control-error-message/control-error-message.directive";
import { HowtoComponent } from "./pages/howto/howto.component";
import { BookCollectionComponent } from "./pages/howto/manage-state-with-ngrx/book-collection/book-collection.component";
import { BookListComponent } from "./pages/howto/manage-state-with-ngrx/book-list/book-list.component";
import { SetStyleFromCodeComponent } from "./pages/howto/set-style-from-code/set-style-from-code.component";
import { CommunicationWithServiceComponent } from "./pages/howto/communication-with-service/communication-with-service.component";
import { HttpApiCallsComponent } from "./pages/howto/http-api-calls/http-api-calls.component";
import { booksReducer } from "./shared/state/books/books.reducer";
import { collectionReducer } from "./shared/state/collection/collection.reducer";
import { refreshReducer } from "./shared/state/refresh/refresh.reducer";
import { MessageService } from "primeng/api";
import { CommonService } from "./shared/services/common.service";
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ApiInterceptor } from "./shared/interceptor/api.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        books: booksReducer,
        collection: collectionReducer,
        refresh: refreshReducer,
      },
      {}
    ),
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TableModule,
    DialogModule,
    ToolbarModule
  ],
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
    BookListComponent,
    BookCollectionComponent,
    LoginComponent,
    ContactListComponent  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MessageService,
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class AppModule {}
