import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import Home from '../components/Home';
import Login from './Login';

function Welcome() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      checkUser();
    }, []);
  
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    }

    return (
    isLoggedIn? <Home /> : <Login />
    )
}

export default Welcome;
