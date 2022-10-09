const addTask = (obj) => ({
  type: "ADD",
  payload: obj,
});

const editTask = (id, newText) => ({
  type: "EDIT_ONE",
  payload: { id, newText },
});

const completeTask = (id) => (dispatch, getState) => {
  dispatch({
    type: "CHECK_ONE",
    payload: id,
  });

  let allChecked = true;

  const { tasks } = getState();
  for (let task of tasks) {
    if (task.completed === false) allChecked = false;
  }

  if (allChecked) {
    dispatch({ type: "CHECK_ALL" });
  }
};

const completeAll = () => ({ type: "CHECK_ALL" });

const uncompleteAll = () => ({ type: "UNCHECK_ALL" });

const deleteTask = (id) => ({
  type: "DELETE_ONE",
  payload: id,
});

const deleteAllTasks = () => ({
  type: "DELETE_ALL",
});

const fetchTasks = () => async (dispatch) => {
  // we may dispatch first start action here (to show some spinner while data is fetching)
  const resp = await fetch("https://6321dfda82f8687273bb7341.mockapi.io/tasks");
  // and dispatch success action or error action after fetching process
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "FETCH",
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
