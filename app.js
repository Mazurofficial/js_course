
const numberOfFilms = +prompt("How much films have you seen ?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const filmName = prompt('What film was last ?');
const rating = prompt('How cool it was ?'); 
personalMovieDB.movies[filmName] = rating;
console.log(personalMovieDB);