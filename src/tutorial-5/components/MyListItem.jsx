import React from "react";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function MyListItem() {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Oui Oui"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Sandra Adams
            </Typography>
            {" — Do you have Paris recommendations? Have you ever…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default MyListItem;
