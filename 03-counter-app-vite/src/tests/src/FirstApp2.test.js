import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../components/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  const title = "Hola, Soy Goku";
  const subtitle = "Soy un subtitulo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el mensaje, Hola, Soy Goku", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe("First App");
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain("First App");
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});