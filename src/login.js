import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <header>
        <button onClick={onClickLogin}>
          {isLoggedIn ? "ログアウト" : "ログイン"}
        </button>
      </header>
      <LoginContext.Provider value={isLoggedIn}>
        {children}
      </LoginContext.Provider>
    </>
  );
};

export const useLogin = () => useContext(LoginContext);
