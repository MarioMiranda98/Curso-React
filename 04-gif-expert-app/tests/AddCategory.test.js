import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";
import userEvent from "@testing-library/user-event";

describe("Pruebas en <AddCategory />", () => {
  const inputValue = "Gon";

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCartegory={() => { }} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Mario" } });

    expect(input.value).toBe("Mario");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCartegory={onNewCategory} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });
    userEvent.type(input, "abc{enter}");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar al onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCartegory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});