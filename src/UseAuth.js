import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => setIsLoggedIn(!isLoggedIn);

  return { isLoggedIn, clickHandler };
};

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, clickHandler } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <div>
        <button onClick={clickHandler}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>
      </div>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
