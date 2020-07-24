import React from "react";
import { Container, List } from "@material-ui/core";
import TodoListItem from "./components/TodoListItem";

import { useStylesTodoList } from "./styled/TodoListStyled";

const todolist = [
  {
    id: 1,
    title: "Посмотреть youtube",
    date: "14/06/2020 16:00",
    priority: "high",
    isDone: true,
  },
  {
    id: 2,
    title: "Поесть",
    date: "14/06/2020 15:30",
    priority: "low",
    isDone: false,
  },
  {
    id: 3,
    title:
      "Выпить кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: false,
  },
  {
    id: 3,
    title: "Выпить кофе",
    date: "13/06/2020 16:15",
    priority: "medium",
    isDone: true,
  },
];

export default function TodoList() {
  const classes = useStylesTodoList();
  return (
    <Container className="todo-list">
      <List className={classes.root}>
        {todolist.map((items) => (
          <TodoListItem key={items.id} {...items} />
        ))}
      </List>
    </Container>
  );
}
