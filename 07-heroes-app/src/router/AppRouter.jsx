import { createBrowserRouter } from "react-router-dom";
import { HeroesRouter } from "../heroes/routes/HeoresRoutes";
import { LoginPage } from "./../auth/pages/LoginPage";
import { AppLayout } from "../ui/layouts/AppLayout";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />,
      </PublicRoute>
    ),
  },
  {
    element: (
      <PrivateRoute>
        <AppLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        path: "/*",
        element: <HeroesRouter />,
      },
    ],
  },
]);
