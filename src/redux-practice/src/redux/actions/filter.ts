import { FilterType } from "../types";
import { TasksTypes } from "../types";

export const switchFilter = (newFilter: FilterType) => ({
  type: TasksTypes.CHANGE_FILTER,
  payload: newFilter,
});
