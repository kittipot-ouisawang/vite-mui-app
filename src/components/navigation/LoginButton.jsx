import React, {useContext} from 'react';
import { GoogleLogin } from '@react-oauth/google'; 
import AuthContext from '../AuthContext';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google'; // For the Google icon

function LoginButton() {
  // Use the context to get user data and the login handler
  const { user, handleLoginSuccess, handleLogout } = useContext(AuthContext);

  const handleLoginError = () => {
    console.log('GoogleAuth object fails to initialize');
    handleLogout();
  };
  
  const handleLoginFailure = () => {
    console.log('Sing-in attempt fails');
    handleLogout();
  };

  // If not logged in, show the login button
  return (
    <div>
      {user ? (
        // If the user object exists, they are logged in
        <Box>
          <Typography variant="h6" >Hello {user.given_name || user.name}</Typography>
          <Button onClick={handleLogout} variant="outlined" size="small" color="white">Log out</Button>
        </Box>
      ) : (
        // If user is null, show the login button
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          onFailure={handleLoginFailure}
          size="medium"
          text="signin"
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

export default LoginButton;