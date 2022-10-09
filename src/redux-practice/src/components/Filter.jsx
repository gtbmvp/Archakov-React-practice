import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Tabs, Tab } from "@mui/material";

import { switchFilter } from "../redux/actions/filter";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleTabChange = (e, newFilter) => {
    dispatch(switchFilter(newFilter));
  };

  return (
    <Tabs value={filter} onChange={handleTabChange}>
      <Tab value="all" label="Все" />
      <Tab value="incompleted" label="Активные" />
      <Tab value="completed" label="Завершённые" />
    </Tabs>
  );
};
