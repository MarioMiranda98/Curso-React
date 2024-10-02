import { render, screen } from "@testing-library/react";
import { AuthContext } from "./../auth/context/AuthContext";
import { PrivateRoute } from "./../router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el <PrivateRoute />", () => {
  test("debe mostrar el children si esta autenticado", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Mario Alberto",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith();
  });
});
