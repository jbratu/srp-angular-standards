import { BooksActions, BooksApiActions } from "./../state/books/books.actions";
import {
  selectBooks,
  selectBookCollection,
} from "./../state/books/books.selectors";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { GoogleBooksService } from "./manage-state-with-ngrx/books.service";
import { selectRefresh } from "../state/refresh/refresh.selectors";

@Component({
  selector: "app-howto",
  templateUrl: "./howto.component.html",
  styleUrls: ["./howto.component.css"],
})
export class HowtoComponent implements OnInit {
  // Set to the default how-to to show or '' to select.
  //selectedHowTo = 'control-error-message';
  selectedHowTo = "http-api-calls";

  // NgRx specific variables to showcase functionality
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  refreshState$ = this.store.select(selectRefresh);

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {}

  selectHowto(event: any) {
    // console.log(event.target.selectedIndex);
    this.selectedHowTo = event.target.value;

    if (this.selectedHowTo === "state-with-ngrx") {
      // Get the list of books from the API
      this.booksService
        .getBooks()
        .subscribe((books) =>
          this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
        );
    }
  }

  /**
   * NgRx specific functions to showcase functionality.
   */

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
