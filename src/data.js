
export const alphabeticOrderAsc = function (anyArray) {
  const orderAZ = anyArray.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
  return orderAZ;  
}

export const alphabeticOrderDes = function (anyArray) {
  const orderZA = anyArray.sort((a, b) => (a.title > b.title) ? -1 : (a.title < b.title) ? 1 : 0);
  return orderZA;
}

export const mappedDirector = function(anyArray) {
  const director = anyArray.map(anyArray => anyArray.director)
  return director
}

export const filteredDirector = function(anyArray) {
  const onlyDirectorName = anyArray.filter((director, index) => {
    return anyArray.indexOf(director) === index
  })
  return onlyDirectorName
}
