import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStylesTodoList = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[900],
    borderRadius: 10,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '& li+li': {
      borderTop: `1px solid ${grey[600]}`,
    },
    '& li': {
      '& span': {
        color: grey[300]
      },
      '& p': {
        color: grey[500]
      }
    }
  }, 
}));


export { useStylesTodoList };
