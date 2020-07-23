import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import {PrioritySelect, HighPriorityOption, MediumPriorityOption, LowPriorityOption} from '../styled/SelectStyled';
import {StatusIcon, DoneIcon, NotDoneIcon, DeleteIcon} from '../styled/IconStyled';


export default function TodoListItem({ id, title, date, priority, isDone }) {
  return (
    <ListItem button className="todo-list__item">
      <ListItemAvatar>
        <StatusIcon isDone={isDone}>
          {isDone ? (
            <DoneIcon  />
          ) : (
            <NotDoneIcon />
          )}
        </StatusIcon>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={date} />
      <ListItemSecondaryAction>
        <PrioritySelect
          value={priority}
        >
          <HighPriorityOption value={"high"}>
            Высокий
          </HighPriorityOption>
          <MediumPriorityOption value={"medium"}>
            Средний
          </MediumPriorityOption>
          <LowPriorityOption value={"low"}>
            Низкий
          </LowPriorityOption>
        </PrioritySelect>
        <IconButton edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
