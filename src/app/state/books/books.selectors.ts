import { Book } from './../../howto/manage-state-with-ngrx/books.model';
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>("books");

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>("collection");

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
