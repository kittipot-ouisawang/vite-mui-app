import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import myLogo from '../../assets/images/whalebikeLogo.png'; 
import PedalBikeIcon from '@mui/icons-material/PedalBike';

export default function IconImage() {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: '6px' }}>
      {/* This is the key part! */}
      <Avatar 
        src={myLogo}
        alt={<PedalBikeIcon />} 
      />
    </Stack>
  );
}