import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el Componente <GifExpertApp />', () => { 
  test("Should match Snapshot", () => {
    const { container } = render(<GifExpertApp />);
    
    expect(container).toMatchSnapshot();
  });

  test("Pruebas en el add category", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Mario" } });;
    fireEvent.submit(screen.getByRole("form"));
    
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(3);
  });

  test("Debe mostrar el titulo", () => {
    render(<GifExpertApp />);

    const h1 = screen.getByRole("heading", { level: 1 });

    expect(h1).toBeTruthy();
  });
});