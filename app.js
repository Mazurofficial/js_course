// 1 LESSON.......................................................

// const numberOfFilms = +prompt("How much films have you seen ?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const filmName = prompt('What film was last ?');
// const rating = prompt('How cool it was ?'); 
// personalMovieDB.movies[filmName] = rating;
// console.log(personalMovieDB);


// 2 LESSON..........................................................

// const numberOfFilms = +prompt("How much films have you seen ?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < numberOfFilms; i++){
//     const filmName = prompt('What film was last ?');
//     const rating = prompt('How cool it was ?'); 

//     if( filmName!= null && rating != null && filmName != '' && rating != '' && filmName.length < 50){
//         personalMovieDB.movies[filmName] = rating;
//         console.log('done')
//     } else {
//         console.log('error')
//         i--
//     }
// }
// switch(true){
//     case numberOfFilms < 10:
//         console.log('watch more');
//         break;
//     case numberOfFilms >= 10 && numberOfFilms < 30:
//         console.log('great job');
//         break;
//     case numberOfFilms >= 30:
//         console.log('you are kinoman');
//         break;
//     default:
//         console.log('error');
// }
// console.log(personalMovieDB);

//3 LESSON.............................................................

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much films have you seen ?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        const filmName = prompt('What film was last ?');
        const rating = prompt('How cool it was ?');

        if (filmName != null && rating != null && filmName != '' && rating != '' && filmName.length < 50) {
            personalMovieDB.movies[filmName] = rating;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel(){
    switch(true){
        case numberOfFilms < 10:
            console.log('watch more');
            break;
        case numberOfFilms >= 10 && numberOfFilms < 30:
            console.log('great job');
            break;
        case numberOfFilms >= 30:
            console.log('you are kinoman');
            break;
        default:
            console.log('error');
    }
}

detectPersonalLevel();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres.push(prompt(`What is yur favouriter genre ${i} ?`));
    }
}

writeYourGenres();

function showMyDB(DB){
    if(DB.privat){
        console.log("DB is private");
    } else{
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);
