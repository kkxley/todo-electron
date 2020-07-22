import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select } from "@material-ui/core";

const HighPriorityOption = styled(MenuItem)({
  color: "#dc3545",
});

const MediumPriorityOption = styled(MenuItem)({
  color: "#ffc107",
});

const LowPriorityOption = styled(MenuItem)({
  color: "#28a745",
});

const useStylesPrioritySelect = makeStyles({
  root: {
    color: ({ value }) => {
      console.log(value);
      switch (value) {
        case "high":
          return "#dc3545";
        case "medium":
          return "#ffc107";
        case "low":
          return "#28a745";
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
