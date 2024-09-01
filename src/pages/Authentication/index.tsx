import React, { useState } from 'react';
import logo from '@assets/images/devBunnies.png';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Box } from '@mui/material';

export default function Authentication() {
  /** authView : true = signUp, false = signIn */
  const [authView, setAuthView] = useState<boolean>(false);

  return (
    <>
      <Box display='flex' height='100vh'>
          <Box
            flex={1}
            display='flex' 
            justifyContent='center' 
            alignItems='center'
          >
            <img src={logo} className="App-logo" alt="logo"/>
          </Box>
          <Box flex={1} 
            display='flex' 
            justifyContent='center' 
            alignItems='center'
          >
            { authView ? (<SignUp setAuthView={setAuthView} />) : (<SignIn setAuthView={setAuthView} />) }
          </Box>
      </Box>
    </>
  );
}
