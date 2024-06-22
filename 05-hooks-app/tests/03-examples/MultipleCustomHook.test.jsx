import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks";
import { useCounter } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter.js");

describe("Pruebas en <MultipleCustomHooka />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostart el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando"));

    // const nextButton = screen.getByRole("button", { name: "Siguiente" });
  });

  test("Debe de mostrar un pokemon", () => {
    useFetch.mockReturnValue({
      data: [
        {
          name: "Charmander",
          id: 1,
          sprites: {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
          },
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
  });

  test("Debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [
        {
          name: "Charmander",
          id: 1,
          sprites: {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
          },
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
