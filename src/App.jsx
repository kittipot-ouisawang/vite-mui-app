import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import LocationPage from './components/pages/LocationPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
//import ProductManagementPage from './components/pages/ProductManagementPage.jsx';
import ResponsiveAppBar from './components/navigation/ResponsiveAppBar.jsx';

import AuthContext from './components/AuthContext.jsx';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

const pages = ["Home", "Location", "About"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function App() {
   // State to hold the user's profile object
    const [user, setUser] = useState(null);
  
    // This function will be called from the login button on success
    const handleLoginSuccess = (credentialResponse) => {
     
      const idToken = credentialResponse.credential;

      // Decode the JWT to get the user's profile information.
      const decoded = jwtDecode(idToken);

      // Set the user state with the DECODED object.
      setUser(decoded);
    };
  
    // This function can be used to log the user out
    const handleLogout = () => {
      setUser(null);
    };

  return (
       // Provide the user state and the login/logout functions to the entire app
    <AuthContext value={{ user, setUser, handleLoginSuccess, handleLogout }}>
      <Routes>
        <Route path="/" element={<ResponsiveAppBar pages={pages} settings={settings} />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="location" element={<LocationPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </AuthContext>
  )
}

export default App
