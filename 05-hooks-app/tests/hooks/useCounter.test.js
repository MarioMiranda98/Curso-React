import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./../../src/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act < undefined > (() => { increment(1); });

    expect(result.current.counter).toBe(101);
  });

  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act < undefined > (() => { decrement(1); });

    expect(result.current.counter).toBe(99);
  });

  test("Debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, reset } = result.current;

    act < undefined > (() => { reset(); });

    expect(counter).toBe(100);
  });
});