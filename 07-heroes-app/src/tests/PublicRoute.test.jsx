import { render, screen } from "@testing-library/react";
import { AuthContext } from "./../auth/context/AuthContext";
import { PublicRoute } from "./../router/PrivateRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("Pruebas en public route", () => {
  test("Should show children if does not authenticated", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ contextValue }}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });

  test("Should show navigation if user is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC",
      },
    };

    render(
      <AuthContext.Provider value={{ contextValue }}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
            <Route path="/marvel" element={<h1>Página de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });
});
