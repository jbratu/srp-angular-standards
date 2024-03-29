import { Book } from './../../howto/manage-state-with-ngrx/books.model';
import { createReducer, on } from "@ngrx/store";
import { BooksApiActions } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
