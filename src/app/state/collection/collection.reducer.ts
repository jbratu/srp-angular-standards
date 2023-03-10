import { BooksActions } from "./../books/books.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    // Remove a book by ID
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    // Add a book ID to the collection if it hasn't been added before
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  }),
  on(BooksActions.deleteCollection, (_state) => {
    return [];
  })
);
