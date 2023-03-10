import { Book } from "./../../howto/manage-state-with-ngrx/books.model";
import { createFeatureSelector } from "@ngrx/store";

export const selectRefresh = createFeatureSelector<string>("refresh");
