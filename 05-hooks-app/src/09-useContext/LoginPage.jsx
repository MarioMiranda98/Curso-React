import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const context = useContext(UserContext);
  console.log(context);

  const onSetUser = e => {
    e.preventDefault();

    context?.setUser({
      name: "mario",
      email: "mario@correo.com",
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <p aria-label="login-name">{context?.user?.name}</p>
      <button
        className="btn btn-primary"
        onClick={onSetUser}
        aria-label="set-user"
      >
        Set Usuario
      </button>
    </>
  );
};
