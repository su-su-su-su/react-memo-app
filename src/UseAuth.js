import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => setIsLoggedIn(!isLoggedIn);

  return { isLoggedIn, clickHandler };
};
