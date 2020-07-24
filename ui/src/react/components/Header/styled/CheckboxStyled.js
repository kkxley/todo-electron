import React from "react";
import {Checkbox} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {green, red, yellow} from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  
  const RedCheckbox = withStyles({
    root: {
      color: red[700],
      '&$checked': {
        color: red[800],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const YellowCheckbox = withStyles({
    root: {
      color: yellow[700],
      '&$checked': {
        color: yellow[800],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  export {GreenCheckbox, RedCheckbox, YellowCheckbox};