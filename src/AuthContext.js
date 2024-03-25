import { createContext, useContext } from 'react';
import { useAuth } from './UseAuth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, clickHandler } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <div>
        <button onClick={clickHandler}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
