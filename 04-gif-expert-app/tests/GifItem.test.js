import { render, screen } from "@testing-library/react";
import { GifGridItem } from "./../src/components/GifGridItem";

describe('Pruebas en Gif Item', () => {
  const title = "Titulo";
  const url = "https://dominio.com/";

  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<GifGridItem title={title} url={url} />);

    expect(screen.getByRole("paragraph").innerHTML).toBe(title);
  });
});