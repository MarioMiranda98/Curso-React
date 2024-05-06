import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test("getHeroByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });

      done();
    });
  });

  test("getHeroByIdAsync debe retornar error si el herore no existe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`);

      done();
    });
  });
});