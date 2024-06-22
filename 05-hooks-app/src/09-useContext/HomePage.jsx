import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const context = useContext(UserContext);
  console.log(context);

  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <p aria-label="name">{context?.user?.name}</p>
      <p>{context?.user?.email}</p>
    </>
  );
};
