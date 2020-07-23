import { makeStyles } from "@material-ui/core/styles";
import {teal} from "@material-ui/core/colors";

const useStylesHeader = makeStyles((theme) => ({
    root: {
      backgroundColor: teal[900],
      marginBottom: theme.spacing(2),
      color: teal[50]
    },
  }));

export {useStylesHeader};