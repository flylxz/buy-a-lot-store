import { Fab } from '@material-ui/core';

export const FloatFilterButton = ({ openFilter, styles }) => {
  return (
    <Fab
      variant='extended'
      style={{ position: 'fixed', left: 20, top: 20 }}
      onClick={() => openFilter(true)}
    >
      filter
    </Fab>
  );
};
