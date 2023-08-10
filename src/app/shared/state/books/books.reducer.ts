import { createReducer, on } from "@ngrx/store";
import { BooksApiActions } from "./books.actions";
import { Book } from "src/app/pages/howto/manage-state-with-ngrx/books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
