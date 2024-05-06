import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-Funciones', () => {
  test("getUser debe retornar un user", () => {
    const baseUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user.uid).toBe(baseUser.uid);
    expect(user.username).toBe(baseUser.username);
    expect(user).toEqual(baseUser);
  });

  test("getUserActivo debe retornar un user con nombre personalizado", () => {
    const baseName = "Mario";

    const baseUser = {
      uid: 'ABC567',
      username: baseName
    }

    const user = getUsuarioActivo(baseName);

    expect(user).toEqual(baseUser);
  });
});