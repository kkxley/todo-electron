import React from "react";
import {Grid } from "@material-ui/core";
import {FormControlLabel} from '@material-ui/core';

import {GreenCheckbox, RedCheckbox} from '../styled/CheckboxStyled';

export default function StatusCheckbox() {

  return (
          <Grid container justify="space-around">
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={true}
                  name="executed"
                />
              }
              label="Сделанные"
            />
            <FormControlLabel
              control={
                <RedCheckbox
                  checked={true}
                  name="waiting"
                />
              }
              label="Не сделанные"
            />
          </Grid>
  );
}
