import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

function MyListItem({ fullName, text, date, deleteComment }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={fullName}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={`${fullName} ${new Intl.DateTimeFormat("ru-RU", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(new Date(date))}`}
          secondary={text}
        />

        <IconButton aria-label="delete" onClick={() => deleteComment(date)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default MyListItem;
