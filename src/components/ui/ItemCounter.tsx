import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

interface Props {
  currentValue: number;
  maxValue: number;

  // Methods
  updatedQuantity: (newValue: number) => void;
}

export const ItemCounter:FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {

  const addOrRemove = ( value: number ) => {
    if ( value === -1 ) {
      if ( currentValue === 1 ) return;

      return updatedQuantity( currentValue - 1);
    }

    if ( currentValue >= maxValue ) return;

    updatedQuantity( currentValue + 1 );
  }

  return (
    <Box display='flex' alignItems='center'>
        <IconButton onClick={ () => addOrRemove(-1) }>
            <Icon icon="ic:round-remove-circle-outline" width="25" />
        </IconButton>
        <Typography sx={{ width: 45, textAlign:'center' }}> {currentValue} </Typography>
        <IconButton onClick={ () => addOrRemove(+1) }>
            <Icon icon="ic:round-add-circle-outline" width="25" />
        </IconButton>
    </Box>
  )
}
