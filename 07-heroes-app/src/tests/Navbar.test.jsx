import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en el Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Mario",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe aparecer el nombre de la persona", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText("Mario")).toBeTruthy();
  });

  test("deeb de hacer el logout", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
