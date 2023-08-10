import { createFeatureSelector } from "@ngrx/store";

export const selectRefresh = createFeatureSelector<string>("refresh");
