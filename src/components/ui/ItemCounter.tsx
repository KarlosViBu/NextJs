import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
// import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';


interface Props {

}

export const ItemCounter:FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            {/* <RemoveCircleOutline /> */}
            <Icon icon="ic:round-remove-circle-outline" color="#154" width="30" />
        </IconButton>
        <Typography sx={{ width: 45, textAlign:'center' }}> 1 </Typography>
        <IconButton>
            {/* <AddCircleOutline /> */}
            <Icon icon="ic:round-add-circle-outline" color="#154" width="30" />
        </IconButton>
    </Box>
  )
}
