import { getGifs } from "./../src/helpers/GetGifs";

describe("Pruebas en getGifs", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Hunter X Hunter");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});