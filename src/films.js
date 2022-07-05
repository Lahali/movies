const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  // destructuring
  const directors = movies.map(({ director }) => director);
  console.log('EXERCICE 1 ->', directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directors = array.filter((names) => names.director === director);
  console.log('EXERCICE 2 ->', directors);
  return directors;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  console.log(moviesFromDirector);
  const moviesScore = moviesFromDirector.reduce(
    (prev, curr) => (prev.score + curr.score) / moviesFromDirector.lenght
  );
  const averageScore = Number(moviesScore.toFixed(2));
  console.log('EXERCISE 3 ->', averageScore);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const moviesTitles = array.map(({ title }) => title);
  const arrayOrdered = moviesTitles.sort((a, b) => a.localeCompare(b));
  const firstTwenty = arrayOrdered.slice(0, 20);
  console.log('EXERCISE 4 ->', firstTwenty);
  return firstTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  //sin utilizar el desestructuring
  //const moviesYears = array.map(item => item.year);
  //const moviesByTitle = array.map(item => item.title);
  // const orderedArray = moviesYears.sort((a, b) => a.year - b.year)

  const orderedArray = array
    .map((item) => item)
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      if (a.title === b.title) return 0;
    });
  orderedArray.sort((a, b) => a.year - b.year);

  console.log('EXERCISE 5 ->', orderedArray);
  return orderedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array) {
  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
