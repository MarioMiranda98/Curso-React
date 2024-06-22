import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { onLogin: onLoginContext } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    onLoginContext("Mario Miranda");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5" style={{ width: "100vw" }}>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
