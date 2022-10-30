import { Task, Actions, TasksTypes } from "../types";

export function tasksReducer(state: Task[] = [], action: Actions) {
  switch (action.type) {
    case TasksTypes.GET_TASKS:
      return [...state, ...action.payload];

    case TasksTypes.ADD_TASK:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          ...action.payload,
        },
      ];

    case TasksTypes.EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.newText }
          : task
      );

    case TasksTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case TasksTypes.CHECK_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case TasksTypes.COMPLETE_ALL:
      return state.map((task) => ({ ...task, completed: true }));

    case TasksTypes.UNCOMPLETE_ALL:
      return state.map((task) => ({ ...task, completed: false }));

    case TasksTypes.DELETE_ALL:
      return [];

    default:
      return state;
  }
}
