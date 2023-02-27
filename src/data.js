export const alphabeticOrderAsc = function (movies) {
  const orderAZ = movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
  return orderAZ;  
};

export const alphabeticOrderDes = function (movies) {
  const orderZA = movies.sort((a, b) => (a.title > b.title) ? -1 : (a.title < b.title) ? 1 : 0);
  return orderZA;
};

// extrae nombre de directores
export const mappedDirector = function(movies) {
  const director = movies.map(anyArray => anyArray.director)
  return director
}

//elimina nombres resptidos en directores
export const filteredDirector = function(movies) {
  const onlyDirectorName = movies.filter((director, index) => {
    return movies.indexOf(director) === index
  })
  return onlyDirectorName
}

export const mappedTitle = function(movies) {
  const titles = movies.map(anyArray => anyArray.title)
  return titles
}

export const calculate = function(movies) {  
  const moviesGender = [];
  for (let i=0; i<movies.length; i++){
    const movie = movies[i];
    let femaleCount = 0;
    let maleCount = 0;
    const movieGender = [];  
    for (let j=0; j<movie.people.length; j++) {
      const person = movie.people[j];
      if (person.gender === 'Female'){
        femaleCount += 1;
      }
      else if (person.gender === 'Male'){
        maleCount += 1;
      }
    }
    movieGender.push(femaleCount);
    movieGender.push(maleCount);
    moviesGender.push(movieGender);       
  }
  
  //console.log(moviesTitleGender);
  return moviesGender
}

  

