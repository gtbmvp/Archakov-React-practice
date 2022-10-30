import React from "react";

import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface IClickArg {
  text: string;
  completed: boolean;
}
interface AddFieldProps {
  onClickAdd: (arg: IClickArg) => void;
}

export const AddField: React.FC<AddFieldProps> = ({ onClickAdd }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const onAdd = () => {
    onClickAdd({ text: inputValue, completed: checked });
    setInputValue("");
    setChecked(false);
  };
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={onAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};
