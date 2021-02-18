import {
  Container,
  Paper,
  Box,
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
    justifyContent: 'space-between',
    width: 200,
    height: 150,
  },
}));

export const AddItem = () => {
  const addItemStyle = useStyles();
  return (
    <Container
      spacing={3}
      disableGutters={true}
      style={{
        position: 'fixed',
        bottom: '-5px',
        left: 0,
        right: 0,
        height: '215px',
      }}
    >
      <Paper elevatio={5}>
        <Box
          my={5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingTop: '20px',
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
                  <Button variant='outlined' component='span'>
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
      </Paper>
    </Container>
  );
};
