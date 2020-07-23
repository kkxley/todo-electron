import React from "react";
import { Container, Typography } from "@material-ui/core";

import { useStylesHeader } from "./styled/HeaderStyled";

import DatePickers from "./components/DatePickers";

export default function Header() {
  const classes = useStylesHeader();

  return (
    <Container className={classes.root}>
      {false && <Typography variant="h3">ToDO List</Typography>}
      <DatePickers />
    </Container>
  );
}
