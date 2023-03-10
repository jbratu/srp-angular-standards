import { Book } from '../../howto/manage-state-with-ngrx/books.model';
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const BooksActions = createActionGroup({
  source: "Books",
  events: {
    "Add Book": props<{ bookId: string }>(),
    "Remove Book": props<{ bookId: string }>(),
    "Delete Collection": emptyProps(),
  },
});

export const BooksApiActions = createActionGroup({
  source: "Books API",
  events: {
    "Retrieved Book List": props<{ books: ReadonlyArray<Book> }>(),
  },
});
