import { Fab } from '@material-ui/core';

export const FloatFilterButton = ({ openFilter, styles }) => {
  return (
    <Fab variant='extended' className={styles} onClick={() => openFilter(true)}>
      filter
    </Fab>
  );
};
