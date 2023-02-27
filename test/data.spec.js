import { alphabeticOrderAsc,alphabeticOrderDes,mappedDirector,filteredDirector } from '../src/data.js';
describe('alphabeticOrderAsc', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderAsc).toBe('function');
  });
  const data = [{"title": "Castle in the Sky"},{"title": "Kiki's Delivery Service"},{"title": "Grave of the Fireflies"}];
  it('sorts data in ascending alphabetic order', () => {
    const expected = [{"title": "Castle in the Sky"},{"title": "Grave of the Fireflies"},{"title": "Kiki's Delivery Service"}];
    const result = alphabeticOrderAsc(data);
    expect(result).toEqual(expected);
  });
});
describe('alphabeticOrderDes', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderDes).toBe('function');
  });
  const  peliculas = [{"id": 1, "title":'uno', "generos": ['accion','terror']},
    {"id": 2, "title":'dos', "generos": ['terror']},
    {"id":3, "title":'tres', "generos": ['accion', 'comedia']}]
  it('alphabeticOrderDes', () => {
    expect(alphabeticOrderDes(peliculas)).toStrictEqual([{"id": 1, "title":'uno', "generos": ['accion','terror']}, {"id":3, "title":'tres', "generos": ['accion', 'comedia']}, {"id": 2, "title":'dos', "generos": ['terror']}]);
  });
});
describe('mappedDirector', () => {
  it ('is a function', () => {
    expect(typeof mappedDirector).toBe('function');
  })
  const  peliculas = [{"id": 1, "title":'uno', "generos": ['accion','terror'], "director": "Juan Perez"},
    {"id": 2, "title":'dos', "generos": ['terror'], "director": "Wes Anderson"},
    {"id": 3, "title":'tres', "generos": ['accion', 'comedia'], "director": "Guillermo Totoro"}]
  it('mappedDirector', () => {
    expect(mappedDirector(peliculas)).toEqual(["Juan Perez", "Wes Anderson", "Guillermo Totoro"])
  })
})
describe("filteredDirector",() =>{
  it("is a function", () => {
    expect(typeof filteredDirector).toBe("function");
  });
  const data = ["Hayao Miyazaki", "Hiromasa Yonebayashi", "Isao Takahata", "Hayao Miyazaki", "Hiromasa Yonebayashi", "Isao Takahata"];
  it("filteredDirector",() =>{
    const expected = ["Hayao Miyazaki", "Hiromasa Yonebayashi", "Isao Takahata"];
    const result = filteredDirector(data);
    expect(result).toEqual(expected);
  })
});