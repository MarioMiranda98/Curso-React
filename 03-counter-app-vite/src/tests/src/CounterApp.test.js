import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../components/CounterApp";

describe("Pruebas en CounterApp", () => {
  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<CounterApp value={100} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("11");
  });

  test("Debe de decrementar con el botón -1", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("9");
  });

  test("Debe de resetar el counter", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("-1"));
    // fireEvent.click(screen.getByText("reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("10");
  });
});