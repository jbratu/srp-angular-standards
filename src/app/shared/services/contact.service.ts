import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, switchMap } from "rxjs";
import { Contact } from "../interfaces/contact";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  getContacts(): Observable<any[]> {
    return this.http.get<any>(environment.apiURL + '/contacts2/contacts')
      .pipe(
        switchMap((contactListResponse: any) => {
          return of(contactListResponse._embedded.contacts as Contact[]);
        })
      )
  }

  postContact(contact: Contact): Observable<any> {
    const url = environment.apiURL + '/contacts2/contacts';
    return this.http.post(url, contact);
  }

  patchContact(contact: Contact): Observable<any> {
    const url = contact['_links'].self.href;
    return this.http.patch(url, contact);
  }

  deleteContact(contact: Contact): Observable<any> {
    const url = contact['_links'].self.href;
    return this.http.delete(url);
  }

}