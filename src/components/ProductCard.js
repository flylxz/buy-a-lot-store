import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
  },

  media: {
    height: 120,
  },
});

export const ProductCard = ({
  item: { name, price, image, description },
  currency,
  exchangeRate,
}) => {
  const cardStyle = useStyles();

  return (
    <Paper elevation={5}>
      <Card className={cardStyle.root}>
        <CardMedia
          component='img'
          alt={name}
          className={cardStyle.media}
          image={`./products/${image}`}
          title={name}
        />
        <CardContent className={cardStyle.flex}>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {currency === 'UAH' ? price : Math.ceil(price * exchangeRate)}{' '}
            {currency}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
