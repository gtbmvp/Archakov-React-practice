export function tasksReducer(state = [], action) {
  switch (action.type) {
    case "FETCH":
      return [...state, ...action.payload];

    case "ADD":
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          ...action.payload,
        },
      ];

    case "EDIT_ONE":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.newText }
          : task
      );

    case "DELETE_ONE":
      return state.filter((task) => task.id !== action.payload);

    case "CHECK_ONE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "CHECK_ALL":
      return state.map((task) => ({ ...task, completed: true }));

    case "UNCHECK_ALL":
      return state.map((task) => ({ ...task, completed: false }));

    case "DELETE_ALL":
      return [];

    default:
      return state;
  }
}
