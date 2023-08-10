import { Component } from '@angular/core';
import { Contact } from 'src/app/shared/interfaces/contact';
import { Table } from 'primeng/table';
import { ContactService } from 'src/app/shared/services/contact.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  newContactDialogOpen: boolean = false;
  contactDialog: boolean = false;
  deleteContactDialog: boolean = false;
  deleteContactsDialog: boolean = false;
  contacts: Contact[] = [];
  contact: Contact = {};
  selectedContacts: Contact[] = [];
  submitted: boolean = false;
  cols: any[] = [];
  statuses: any[] = [];
  rowsPerPageOptions = [5, 10, 20];
  isContactsLoading: boolean = false;

  constructor(private contactService: ContactService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadContactList();
  }

  loadContactList(): void {
    this.isContactsLoading = true;
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data
      this.isContactsLoading = false;
    });
  }

  openNew() {
    this.contact = {};
    this.submitted = false;
    this.contactDialog = true;
    this.newContactDialogOpen = true;
  }

  deleteSelectedContacts() {
    this.deleteContactsDialog = true;
  }
  
  editContact(contact: Contact) {
    this.contact = { ...contact };
    this.contactDialog = true;
  }

  deleteContact(contact: Contact) {
    this.deleteContactDialog = true;
    this.contact = { ...contact };
  }

  confirmDeleteSelected() {
    this.deleteContactsDialog = false;
    this.contacts = this.contacts.filter(val => !this.selectedContacts.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contacts Deleted', life: 3000 });
    this.selectedContacts = [];
  }

  confirmDelete() {
    
    this.contactService.deleteContact(this.contact).subscribe((data) => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Deleted', life: 3000 });
      this.deleteContactDialog = false;
      this.contact = {};
      this.loadContactList()
    })
    
  }

  hideDialog() {
    this.contactDialog = false;
    this.submitted = false;
  }

  saveContact() {
    this.submitted = true;

    if (this.newContactDialogOpen) {
      this.contactService.postContact(this.contact).subscribe((data) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Updated', life: 3000 });
        this.contactDialog = false;
        this.contact = {};
        this.loadContactList();
      })
    } else {
      this.contactService.patchContact(this.contact).subscribe((data) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Contact Updated', life: 3000 });
        this.contactDialog = false;
        this.contact = {};
        this.loadContactList();
      })
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
