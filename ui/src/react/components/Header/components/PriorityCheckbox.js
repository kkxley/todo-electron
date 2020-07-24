import React from "react";
import {Grid } from "@material-ui/core";
import {FormControlLabel} from '@material-ui/core';

import {GreenCheckbox, RedCheckbox, YellowCheckbox} from '../styled/CheckboxStyled';

export default function PriorityCheckbox() {

  return (
          <Grid container justify="space-around">
            <FormControlLabel
              control={
                <RedCheckbox
                  checked={true}
                  name="high-priority"
                />
              }
              label="Высокий приоритет"
            />
            <FormControlLabel
              control={
                <YellowCheckbox
                  checked={true}
                  name="medium-priority"
                />
              }
              label="Средний приоритет"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={true}
                  name="low-priority"
                />
              }
              label="Низкий приоритет"
            />
          </Grid>
  );
}
