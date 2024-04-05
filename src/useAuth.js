import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const HandleClick = () => setIsLoggedIn(!isLoggedIn);

  return { isLoggedIn, HandleClick };
};

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, HandleClick } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <div>
        <button onClick={HandleClick}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>
      </div>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
