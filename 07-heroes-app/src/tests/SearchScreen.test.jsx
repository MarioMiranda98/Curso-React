const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { SearchPage } = require("../heroes/pages/SearchPage");

describe("Pruebas en el search screen", () => {
  test("Debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar a batman y el input con el valor del query string", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=Batman"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const inputValue = screen.getByRole("textbox");
    expect(inputValue.value).toBe("Batman");

    const img = screen.getByRole("img");
    expect(img.src).toBe("/assets/heroes/dc-batman.jpg");
  });
});
