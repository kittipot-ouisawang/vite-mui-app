import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function PageContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lr">
        <Box sx={{ bgcolor: 'cornflowerblue' }} >
            {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
