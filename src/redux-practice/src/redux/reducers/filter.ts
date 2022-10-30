import { FilterType, ChangeFilterAction, TasksTypes } from "../types";

export function filterReducer(
  state: FilterType = "all",
  action: ChangeFilterAction
) {
  switch (action.type) {
    case TasksTypes.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
}
