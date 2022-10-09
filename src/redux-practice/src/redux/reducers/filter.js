export function filterReducer(state = "all", action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.payload;

    default:
      return state;
  }
}
