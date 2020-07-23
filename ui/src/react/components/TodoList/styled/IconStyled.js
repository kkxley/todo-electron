import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import WarningIcon from "@material-ui/icons/Warning";
import DeleteIcon from "@material-ui/icons/Delete";

import {red, green} from "@material-ui/core/colors";

const DoneIcon = CheckIcon;

const NotDoneIcon = WarningIcon;

const useStylesStatusIcon = makeStyles({
  root: {
    backgroundColor: ({ isDone }) => (isDone ? green[600] : red[800]),
  },
});

function StatusIcon(props) {
  const classes = useStylesStatusIcon(props);
  return <Avatar className={classes.root} {...props} />;
}

export { StatusIcon, DoneIcon, NotDoneIcon, DeleteIcon };
