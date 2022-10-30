import React from "react";

import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ItemProps {
  text: string;
  completed: boolean;
  onRemove: () => void;
  onCheck: () => void;
  onEdit: (newText: string) => void;
}

export const Item: React.FC<ItemProps> = ({
  text,
  completed,
  onRemove,
  onCheck,
  onEdit,
}) => {
  const handleClickDelete = () => {
    window.confirm("Are you sure about that?") && onRemove();
  };

  const handleClickEdit = () => {
    const newText = window.prompt("Enter new text...", "");
    if (newText) onEdit(newText);
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          checked={completed}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={onCheck}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton onClick={handleClickEdit}>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={handleClickDelete}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
