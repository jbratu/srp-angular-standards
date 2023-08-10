import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const RefreshActions = createActionGroup({
  source: "Refresh",
  events: {
    "Refresh Request": emptyProps(),
    "Refresh Confirmation": emptyProps(),
    "Refresh Cancel": emptyProps(),
    "Refresh Reset": emptyProps(),
  },
});