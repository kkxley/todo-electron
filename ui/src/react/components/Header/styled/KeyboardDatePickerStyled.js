import { makeStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const useStylesKeyboardDatePicker = makeStyles((theme) => ({
  root: {
    "& input, & label": { color: teal[50] },
    "& svg": { color: teal[100] },
    "& .MuiInput-underline:before": {borderColor: teal[100]},
    "& label.Mui-focused": {
        color: teal[200]
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderColor: teal[50]
    },
    "& .MuiInput-underline:after": {
        borderColor: teal[200]
    }
  },
}));

export { useStylesKeyboardDatePicker };
