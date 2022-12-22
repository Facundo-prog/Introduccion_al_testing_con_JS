// Grupo de pruebas
describe('grupo 1', () => {
  beforeAll(() => {});// Antes de todo

  afterAll(() => {});// Despues de todo

  beforeEach(() => {});// Antes de cada test

  afterEach(() => {});// Despues de cada test

  test('test 1', () => {
    expect(1 + 0).toEqual(1);
  });

  test('test 2', () => {
    expect(1 + 0).toEqual(1);
  });

  // Grupo de pruebas
  describe('grupo 2', () => {
    beforeAll(() => {});

    test('test 3', () => {
      expect(1 + 0).toEqual(1);
    });

    test('test 4', () => {
      expect(1 + 0).toEqual(1);
    });
  });
});
