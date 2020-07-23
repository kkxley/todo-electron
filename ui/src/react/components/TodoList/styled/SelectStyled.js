import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select } from "@material-ui/core";

import {red, green, yellow} from "@material-ui/core/colors";

const HighPriorityOption = styled(MenuItem)({
  color: red[900],
});

const MediumPriorityOption = styled(MenuItem)({
  color: yellow[800],
});

const LowPriorityOption = styled(MenuItem)({
  color: green[800],
});

const useStylesPrioritySelect = makeStyles({
  root: {
    color: ({ value }) => {
      console.log(value);
      switch (value) {
        case "high":
          return red[800];
        case "medium":
          return yellow[800];
        case "low":
          return green[600];
        default:
          return "initial";
      }
    },
  },
});

function PrioritySelect(props) {
  const classes = useStylesPrioritySelect(props);
  return <Select className={classes.root} {...props} />;
}
export {
  PrioritySelect,
  HighPriorityOption,
  MediumPriorityOption,
  LowPriorityOption,
};
