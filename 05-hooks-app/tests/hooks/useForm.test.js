import { renderHook, act } from "@testing-library/react";
import { useForm } from "./../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Mario",
    email: "mario@correo.com",
  };

  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      resetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Alberto" } });
    });

    expect(result.current.name).toEqual("Alberto");
    expect(result.current.formState.name).toEqual("Alberto");
  });

  test("Debe de realizar el reinicio del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { resetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Alberto" } });
      resetForm();
    });

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);
  });
});
