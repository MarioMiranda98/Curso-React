import { render } from "@testing-library/react";
import { FirstApp } from "../../components/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title="Hola Soy Mario" />);

    // console.log(container);
    expect(container).toMatchSnapshot(); //Compara con el snapshot
  });

  test("Debe de mostrar el titulo en un H1", () => {
    const { container, getByText } = render(<FirstApp title="Hola Soy Mario" />);

    expect(getByText("Hola Soy Mario")).toBeTruthy(); //Compara que exista un elemento con el texto dado

    const h1 = container.querySelector("#titulo");

    expect(h1.innerHTML).toBe("Hola Soy Mario");
  });

  test("Debe de mostrar el parrafo por id", () => {
    const { getByTestId } = render(<FirstApp title="Hola Soy Mario" />);
    expect(getByTestId("parrafo")).toBeTruthy();
    expect(getByTestId("parrafo").innerHTML).toBe("Soy un parrafo");
  });

  test("Debe de mosrtrar el subtitulo enviado por props", () => {
    const title = "Soy un titulo";
    const subtitle = "Soy un subtitulo";

    const { getByText } = render(
      <FirstApp
        title={title}
        subtitle={subtitle}
      />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});