import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Paper, Divider, Button, List } from "@mui/material";

import { AddField } from "./components/AddField";
import { Filter } from "./components/Filter";
import { Item } from "./components/Item";

import {
  addTask,
  editTask,
  completeTask,
  completeAll,
  uncompleteAll,
  deleteAllTasks,
  deleteTask,
  fetchTasks,
} from "./redux/actions/tasks";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const allChecked = useSelector((state) => state.allChecked);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleClickAdd = (obj) => {
    dispatch(addTask(obj));
  };

  const handleClickEdit = (id, newText) => {
    dispatch(editTask(id, newText));
  };

  const handleClickDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleClickDeleteAll = () => {
    if (window.confirm("Delete all?")) {
      dispatch(deleteAllTasks());
    }
  };

  const handleClickToggle = (id) => {
    dispatch(completeTask(id));
  };

  const handleClickToggleAll = () => {
    if (allChecked) {
      dispatch(uncompleteAll());
    } else {
      dispatch(completeAll());
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onClickAdd={handleClickAdd} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {tasks
            .filter((task) => {
              if (filter === "incompleted") {
                return !task.completed;
              }
              if (filter === "completed") {
                return task.completed;
              } else return true;
            })
            .map((task) => (
              <Item
                key={task.id}
                text={task.text}
                completed={task.completed}
                onRemove={() => handleClickDelete(task.id)}
                onCheck={() => handleClickToggle(task.id)}
                onEdit={(newText) => handleClickEdit(task.id, newText)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!tasks.length} onClick={handleClickToggleAll}>
            {allChecked ? "Снять отметки" : "Отметить всё"}
          </Button>
          <Button disabled={!tasks.length} onClick={handleClickDeleteAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
