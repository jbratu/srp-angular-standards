import { createReducer, on } from "@ngrx/store";
import { RefreshActions } from "./refresh.actions";

export const initialState: string = "";

export const refreshReducer = createReducer(
  initialState,
  on(RefreshActions.refreshRequest, (_state) => {
    return "requested";
  }),
  on(RefreshActions.refreshConfirmation, (_state) => {
    return "confirmed";
  }),
  on(RefreshActions.refreshCancel, (_state) => {
    return "cancelled";
  }),
  on(RefreshActions.refreshReset, (_state) => {
    return "";
  })
);
