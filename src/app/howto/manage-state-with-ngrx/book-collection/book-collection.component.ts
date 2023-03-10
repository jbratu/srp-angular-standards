import { selectRefresh } from "./../../../state/refresh/refresh.selectors";
import { Store } from "@ngrx/store";
import { Book } from "./../books.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RefreshActions } from "src/app/state/refresh/refresh.actions";

@Component({
  selector: "app-book-collection",
  templateUrl: "./book-collection.component.html",
  styleUrls: ["./book-collection.component.scss"],
})
export class BookCollectionComponent implements OnInit {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  refreshState$ = this.store.select(selectRefresh);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  sendRefreshConfirmation() {
    this.store.dispatch(
      RefreshActions.refreshConfirmation()
    );
  }

  cancelRefresh() {
    this.store.dispatch(RefreshActions.refreshCancel());
  }
}
