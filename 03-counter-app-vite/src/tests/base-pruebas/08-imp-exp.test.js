import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test("Obtiene un heroe por id", () => {
    const heroId = 1;

    const hero = getHeroeById(heroId);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })

    expect(hero).toBeDefined();
  });

  test("Manda undefined cuando no encuentra heroe", () => {
    const heroId = -1;

    const hero = getHeroeById(heroId);

    expect(hero).toBeUndefined();
  });

  test("Obtiene un heroe por Owner", () => {
    const owner = "DC";
    const marvelOwner = "Marvel";

    const dcHeroes = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      },
    ];

    const marvelHeroes = [
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
      },
    ];

    const heroes = getHeroesByOwner(owner);
    const heroes2 = getHeroesByOwner(marvelOwner);

    expect(heroes).toBeDefined();
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(dcHeroes);

    expect(heroes2).toBeDefined();
    expect(heroes2.length).toBe(2);
    expect(heroes2).toEqual(marvelHeroes);
  });
});