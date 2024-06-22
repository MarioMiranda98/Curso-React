import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </>
  );
};
