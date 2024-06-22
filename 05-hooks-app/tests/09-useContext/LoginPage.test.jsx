import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage />", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const nameElement = screen.getByLabelText("login-name");
    expect(nameElement.innerHTML).toBe("");
  });

  test("Debe mostrar el usuario despues de dar click", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    fireEvent.click(screen.getByLabelText("set-user"));

    expect(setUserMock).toHaveBeenCalled();
  });
});
