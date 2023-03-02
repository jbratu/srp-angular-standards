import { Book } from './../books.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-book-collection",
  templateUrl: "./book-collection.component.html",
  styleUrls: ["./book-collection.component.scss"],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
