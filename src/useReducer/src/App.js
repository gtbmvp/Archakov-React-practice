import React from "react";

import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function reducer(state, action) {
  switch (action.type) {
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

function App() {
  const [allChecked, setAllChecked] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("all");

  const [state, dispatch] = React.useReducer(reducer, [
    { id: 1, text: "First task", completed: false },
    { id: 2, text: "Second task", completed: true },
  ]);

  const addTask = (obj) => {
    dispatch({
      type: "ADD",
      payload: obj,
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "CHECK_ONE",
      payload: id,
    });
  };

  const toggleCompleteAll = () => {
    if (allChecked) {
      dispatch({ type: "UNCHECK_ALL" });
      setAllChecked(false);
    } else {
      dispatch({ type: "CHECK_ALL" });
      setAllChecked(true);
    }
  };

  const deleteOne = (id) => {
    dispatch({
      type: "DELETE_ONE",
      payload: id,
    });
  };

  const deleteAll = () => {
    if (window.confirm("Delete all?")) {
      dispatch({
        type: "DELETE_ALL",
      });
    }
  };

  const editTask = (id, newText) => {
    dispatch({
      type: "EDIT_ONE",
      payload: { id, newText },
    });
  };

  const handleTabChange = (e, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onClickAdd={addTask} />
        <Divider />
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab value="all" label="Все" />
          <Tab value="incompleted" label="Активные" />
          <Tab value="completed" label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state
            .filter((task) => {
              if (activeTab === "incompleted") {
                return task.completed === false;
              }
              if (activeTab === "completed") {
                return task.completed === true;
              } else return true;
            })
            .map((task) => (
              <Item
                key={task.id}
                text={task.text}
                completed={task.completed}
                remove={() => deleteOne(task.id)}
                onCheck={() => toggleComplete(task.id)}
                edit={(newText) => editTask(task.id, newText)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!state.length} onClick={toggleCompleteAll}>
            {allChecked ? "Снять отметки" : "Отметить всё"}
          </Button>
          <Button disabled={!state.length} onClick={deleteAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
