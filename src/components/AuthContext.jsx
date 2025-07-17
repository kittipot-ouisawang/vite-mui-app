import { createContext } from 'react';

// Create a context with a default value of null.
// This context will hold our user's profile information.
const AuthContext = createContext(null);

export default AuthContext;