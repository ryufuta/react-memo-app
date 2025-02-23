import { useLogin } from "./login.js";

export const Header = () => {
  const { isLoggedIn, logIn, logOut } = useLogin();

  return (
    <header>
      {isLoggedIn ? (
        <button onClick={logOut}>ログアウト</button>
      ) : (
        <button onClick={logIn}>ログイン</button>
      )}
    </header>
  );
};
