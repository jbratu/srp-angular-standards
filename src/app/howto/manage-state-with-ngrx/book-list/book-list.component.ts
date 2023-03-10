import { selectBookCollection } from "./../../../state/books/books.selectors";
import { selectRefresh } from "./../../../state/refresh/refresh.selectors";
import { Book } from "./../books.model";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { RefreshActions } from "src/app/state/refresh/refresh.actions";
import { GoogleBooksService } from "../books.service";
import {
  BooksActions,
  BooksApiActions,
} from "src/app/state/books/books.actions";
import { Subscription } from "rxjs";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit, OnDestroy {
  private subs: Subscription[];
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

  refreshState$ = this.store.select(selectRefresh);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store, private booksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.subs = [];
    this.subs.push(
      this.refreshState$.subscribe({
        next: (data) => {
          if (data === "confirmed") {
            // Delete the local collection
            this.store.dispatch(BooksActions.deleteCollection());
            // Delete the retrieved books
            this.books = [];
            // Get the books again
            this.subs.push(
              this.booksService
                .getBooks()
                .subscribe((books) =>
                  this.store.dispatch(
                    BooksApiActions.retrievedBookList({ books })
                  )
                )
            );
          } else if (data === "requested") {
            this.bookCollection$.subscribe({
              next: (data) => {
                if (data.length < 1) {
                  // There is no collection, so go ahead with the refresh
                  this.store.dispatch(RefreshActions.refreshConfirmation())
                }
            }})
          }
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    })
  }

  sendRefreshRequest() {
    this.store.dispatch(RefreshActions.refreshRequest());
  }
}
