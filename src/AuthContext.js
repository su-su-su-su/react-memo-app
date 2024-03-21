import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => {
    setIsLoggedIn(isLoggedIn === true ? false : true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div>
        <button onClick={clickHandler}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      {children}
    </AuthContext.Provider>
  );
};
