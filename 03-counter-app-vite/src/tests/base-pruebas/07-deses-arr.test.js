import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en 07-desess-arr", () => {
  test("Debe de retornar un String y un Número", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
  });
});