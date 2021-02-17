import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab/';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: '99',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const SimpleAlert = ({ message, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
};
