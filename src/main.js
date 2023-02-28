import { alphabeticOrderAsc, alphabeticOrderDes, filteredDirector, mappedDirector, calculate, mappedTitle } from "./data.js";

import data from "./data/ghibli/ghibli.js";

const movies = data.films;
const root = document.getElementById("root");
//console.log(movies);

const titleImage = (movies) => {
  for (const movie of movies) {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("card");
    movieDiv.innerHTML += `
      <img src="${movie.poster}" alt="imágen de la película">
      <h2>${movie.title}</h2>
      <dialog class="modal" id="modal-${movie.id}">
        <div id="cuadro"></div>
        <h3>Director: ${movie.director}</h3>
        <p>Release Date:  ${movie.release_date}</p>
        <p>Rate:  ${movie.rt_score}</p>
        <p2>${movie.description}</p2>
        <div id="charactersgender"></div>
        <button class="close"><a href="index.html">volver</a></button>
      </dialog>
    `;
    root.appendChild(movieDiv);
    const modal = document.querySelector(`#modal-${movie.id}`);
    movieDiv.addEventListener("click", () => {
      modal.showModal();    
    });
    const movieGender = movieDiv.querySelector("#charactersgender");
    const titles = mappedTitle(movies);
    const moviesGender = calculate(movies);
    const moviesTitleGender = [];
    for (let i = 0; i < movies.length; i++){    
      moviesTitleGender.push({
        name: titles[i],
        female: moviesGender[i][0],
        male: moviesGender[i][1]
      })      
    }
    const showGender = () => {
      for (let i = 0; i < moviesTitleGender.length; i++){
        const movieName = movieDiv.querySelector("h2").textContent;
        if ( movieName === moviesTitleGender[i].name){
          const femaleGender = moviesTitleGender[i].female;
          const maleGender = moviesTitleGender[i].male;
          const genders = document.createElement('p4');
          genders.textContent = `Female: ${femaleGender} Male: ${maleGender}`;
          movieGender.appendChild(genders);
        }        
      }
    }
    showGender(movies);
  }
};
titleImage(movies);

const copyMovies = structuredClone(movies);

const orderBy = (copyMovies) => {
  const buttonSelection = document.getElementById("order")
  buttonSelection.addEventListener("change", () => {
    const selectedOption = document.querySelector("#order option:checked").value;    
    if (selectedOption === "a-z"){
      root.innerHTML = "";
      const orderAZ = alphabeticOrderAsc(copyMovies);    
      titleImage(orderAZ);
    }
    else if (selectedOption === "z-a"){
      root.innerHTML = "";
      const orderZA = alphabeticOrderDes(copyMovies);
      titleImage(orderZA);
    }
    else if (selectedOption === "default"){
      root.innerHTML = "";
      titleImage(movies);      
    }
  });
}
orderBy(copyMovies);

const director = mappedDirector(movies);
const nameDirector = filteredDirector(director);
const directorOption = document.getElementById("directors");
const directorList = nameDirector;
for (let i = 0; i < directorList.length; i++){
  const list = document.createElement('option');
  list.innerHTML = directorList[i];
  directorOption.appendChild(list);
}

document.getElementById("directors").addEventListener("change", function(){
  const selectedOption = document.querySelector("#directors option:checked").value;
  let directorFilter;
  if (selectedOption === "Hayao Miyazaki") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hayao Miyazaki";
    });
  }
  else if (selectedOption === "Isao Takahata") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Isao Takahata";
    });
  }
  else if (selectedOption === "Yoshifumi Kondō") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Yoshifumi Kondō";
    });
  }
  else if (selectedOption === "Hiroyuki Morita") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hiroyuki Morita";
    });
  }
  else if (selectedOption === "Gorō Miyazaki") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Gorō Miyazaki";
    });
  }
  else if (selectedOption === "Hiromasa Yonebayashi") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hiromasa Yonebayashi";
    });
  }
  else {
    root.innerHTML = "";
    directorFilter = movies;
  }
  titleImage(directorFilter);
})
