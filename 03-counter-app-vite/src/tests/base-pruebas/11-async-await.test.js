import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
  test("getImage debe retornar un url", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string")
  });
});