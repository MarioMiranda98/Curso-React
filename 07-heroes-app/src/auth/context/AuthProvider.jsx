import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {};

const initialFunc = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    initialState,
    initialFunc,
  );

  const onLogin = (name = "") => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const onLogout = () => {
    localStorage.removeItem("user");

    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
