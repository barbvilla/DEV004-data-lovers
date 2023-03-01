import { alphabeticOrderAsc, alphabeticOrderDes, mappedDirector, filteredDirector, mappedTitle, calculate} from '../src/data.js';


describe('alphabeticOrderAsc' , () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderAsc).toBe('function');
  })

  const  movies = [{"id": 1, "title":'uno', "generos": ['accion','terror']},
    {"id": 2, "title":'dos', "generos": ['terror']},
    {"id":3, "title":'tres', "generos": ['accion', 'comedia']}];

  it('alphabeticOrderAsc', () => {
    expect(alphabeticOrderAsc(movies)).toStrictEqual([{"id": 2, "title":'dos', "generos": ['terror']}, {"id":3, "title":'tres', "generos": ['accion', 'comedia']}, {"id": 1, "title":'uno', "generos": ['accion','terror']}])
  })  
})


describe('alphabeticOrderDes', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderDes).toBe('function');
  })

  const  movies = [{"id": 1, "title":'uno', "generos": ['accion','terror']},
    {"id": 2, "title":'dos', "generos": ['terror']},
    {"id":3, "title":'tres', "generos": ['accion', 'comedia']}]
  it('alphabeticOrderDes', () => {
    expect(alphabeticOrderDes(movies)).toStrictEqual([{"id": 1, "title":'uno', "generos": ['accion','terror']}, {"id":3, "title":'tres', "generos": ['accion', 'comedia']}, {"id": 2, "title":'dos', "generos": ['terror']}])
  })
})

describe('mappedDirector', () => {
  it ('is a function', () => {
    expect(typeof mappedDirector).toBe('function');
  })
  const  movies = [{"id": 1, "title":'uno', "generos": ['accion','terror'], "director": "Juan Perez"},
    {"id": 2, "title":'dos', "generos": ['terror'], "director": "Wes Anderson"},
    {"id": 3, "title":'tres', "generos": ['accion', 'comedia'], "director": "Guillermo Totoro"}]
  it('mappedDirector', () => {
    expect(mappedDirector(movies)).toEqual(["Juan Perez", "Wes Anderson", "Guillermo Totoro"])
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

describe('mappedTitle', () => {
  it ('is a function', () => {
    expect(typeof mappedTitle).toBe('function');
  })
  const  movies = [{"id": 1, "title":'uno', "generos": ['accion','terror'], "director": "Juan Perez"},
    {"id": 2, "title":'dos', "generos": ['terror'], "director": "Wes Anderson"},
    {"id": 3, "title":'tres', "generos": ['accion', 'comedia'], "director": "Guillermo Totoro"}]
  it('mappedTitle', () => {
    expect(mappedTitle(movies)).toEqual(['uno', 'dos', 'tres'])
  })
})

describe('calculate', () => {
  it ('is a function', () => {
    expect(typeof calculate).toBe('function');
  })

  const movies = [{"id": 1, "title":'uno', "generos": ['accion','terror'], "people": [{
    "name": "Pazu","gender": "Male", "specie": "Human"}, {
    "name": "Satsuki Kusakabe","gender": "Female","specie": "Human"}] },
  {"id": 2, "title":'dos', "generos": ['terror'], "people": [{
    "name": "Pazu","gender": "Male", "specie": "Human"}, {
    "name": "Satsuki Kusakabe","gender": "Male","specie": "Human"}] },
  {"id":3, "title":'tres', "generos": ['accion', 'comedia'], "people": [{
    "name": "Pazu","gender": "Female", "specie": "Human"}, {
    "name": "Satsuki Kusakabe","gender": "Female","specie": "Human"}]}]

  it('calculate', () => {
    expect(calculate(movies)).toEqual([[1,1], [0,2], [2,0]])
  })
})