export function allCheckedReducer(state = false, action) {
  switch (action.type) {
    case "CHECK_ALL":
      return true;

    case "UNCHECK_ALL":
      return false;
    default:
      return state;
  }
}
