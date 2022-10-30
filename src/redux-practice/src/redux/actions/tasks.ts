import { RootState } from "../store";
import { TasksTypes, Actions } from "../types";
import { ActionCreator } from "redux";
import { Dispatch } from "react";

const addTask: ActionCreator<Actions> = (obj: {
  text: string;
  completed: boolean;
}) => ({
  type: TasksTypes.ADD_TASK,
  payload: obj,
});

const editTask: ActionCreator<Actions> = (id: number, newText: string) => ({
  type: TasksTypes.EDIT_TASK,
  payload: { id, newText },
});

const completeTask =
  (id: number) => (dispatch: Dispatch<Actions>, getState: () => RootState) => {
    dispatch({
      type: TasksTypes.CHECK_TASK,
      payload: id,
    });

    let allChecked = true;

    const { tasks } = getState();
    for (let task of tasks) {
      if (task.completed === false) allChecked = false;
    }

    if (allChecked) {
      dispatch({ type: TasksTypes.COMPLETE_ALL });
    }
  };

const completeAll: ActionCreator<Actions> = () => ({
  type: TasksTypes.COMPLETE_ALL,
});

const uncompleteAll: ActionCreator<Actions> = () => ({
  type: TasksTypes.UNCOMPLETE_ALL,
});

const deleteTask: ActionCreator<Actions> = (id: number) => ({
  type: TasksTypes.DELETE_TASK,
  payload: id,
});

const deleteAllTasks: ActionCreator<Actions> = () => ({
  type: TasksTypes.DELETE_ALL,
});

const fetchTasks = () => async (dispatch: Dispatch<Actions>) => {
  // we may dispatch first start action here (to show some spinner while data is fetching)
  const resp = await fetch("https://6321dfda82f8687273bb7341.mockapi.io/tasks");
  // and dispatch success action or error action after fetching process
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: TasksTypes.GET_TASKS,
      payload: data,
    });
  }
};

export {
  addTask,
  editTask,
  completeTask,
  completeAll,
  uncompleteAll,
  deleteAllTasks,
  deleteTask,
  fetchTasks,
};
