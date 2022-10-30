export enum TasksTypes {
  GET_TASKS = "FETCH",
  ADD_TASK = "ADD",
  EDIT_TASK = "EDIT_ONE",
  CHECK_TASK = "CHECK_ONE",
  DELETE_TASK = "DELETE_ONE",
  DELETE_ALL = "DELETE_ALL",
  COMPLETE_ALL = "CHECK_ALL",
  UNCOMPLETE_ALL = "UNCHECK_ALL",
  CHANGE_FILTER = "CHANGE_FILTER",
}

// INTERFACES
interface FetchAction {
  type: TasksTypes.GET_TASKS;
  payload: Task[];
}

interface AddTaskAction {
  type: TasksTypes.ADD_TASK;
  payload: {
    text: string;
    completed: boolean;
  };
}

interface EditTaskAction {
  type: TasksTypes.EDIT_TASK;
  payload: {
    id: number;
    newText: string;
  };
}

interface DeleteTaskAction {
  type: TasksTypes.DELETE_TASK;
  payload: number;
}

interface CheckTaskAction {
  type: TasksTypes.CHECK_TASK;
  payload: number;
}

interface DeleteAllAction {
  type: TasksTypes.DELETE_ALL;
}

export interface CheckAllAction {
  type: TasksTypes.COMPLETE_ALL;
}

export interface UncheckAllAction {
  type: TasksTypes.UNCOMPLETE_ALL;
}

export interface ChangeFilterAction {
  type: TasksTypes.CHANGE_FILTER;
  payload: FilterType;
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// TYPES

export type FilterType = "all" | "incompleted" | "completed";

export type Actions =
  | FetchAction
  | AddTaskAction
  | EditTaskAction
  | DeleteTaskAction
  | CheckTaskAction
  | CheckAllAction
  | UncheckAllAction
  | DeleteAllAction;
