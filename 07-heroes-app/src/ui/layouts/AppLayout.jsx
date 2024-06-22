import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const AppLayout = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
