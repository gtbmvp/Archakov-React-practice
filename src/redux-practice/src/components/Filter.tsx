import { useDispatch } from "react-redux";

import { Tabs, Tab } from "@mui/material";

import { switchFilter } from "../redux/actions/filter";

import { useAppSelector } from "../redux/store";

import { FilterType } from "../redux/types";

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useAppSelector((state) => state.filter);

  const handleTabChange = (e: unknown, newFilter: FilterType) => {
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
