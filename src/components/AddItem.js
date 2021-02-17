import {
  Paper,
  Container,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    justifyContent: 'space-between',
    width: 200,
    height: 150,
  },
}));

export const AddItem = () => {
  const addItemStyle = useStyles();
  return (
    <Container spacing={3}>
      <Box
        my={5}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FormControl
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 500,
            justifyContent: 'space-between',
          }}
        >
          <Box className={addItemStyle.column}>
            <TextField label='Name' />
            <TextField label='Price' type='number' mb={1} />
            <Box>
              <input
                accept='image/*'
                className={addItemStyle.input}
                id='contained-button-file'
                multiple
                type='file'
              />
              <label htmlFor='contained-button-file'>
                Изображение
                <Button variant='contained' variant='outlined' component='span'>
                  +
                </Button>
              </label>
            </Box>
          </Box>
          <Box className={addItemStyle.column}>
            <TextareaAutosize rows={5} placeholder='Description' />
            <Button variant='outlined'>Save</Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
};
