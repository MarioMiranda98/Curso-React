import { render, screen } from "@testing-library/react";
import { AuthContext } from "./../auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "./../router/AppRouter";

describe("Pruebas en el <AppRouter />", () => {
  test("Debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[["/marvel"]]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("Debe de mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Mario",
        id: "ABC",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[["/login"]]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
