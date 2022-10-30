import { CheckAllAction, UncheckAllAction, TasksTypes } from "../types";

export function allCheckedReducer(
  state: boolean = false,
  action: CheckAllAction | UncheckAllAction
) {
  switch (action.type) {
    case TasksTypes.COMPLETE_ALL:
      return true;

    case TasksTypes.UNCOMPLETE_ALL:
      return false;
    default:
      return state;
  }
}
