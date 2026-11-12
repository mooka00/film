const movieTitles = [
    'Космическая станция',
    'Тайна старого дома',
    'Поезд на север',
];
const moviePosters = [
    'pup/cosmos.jpg',
    'pup/house.jpg',
    'pup/train.jpg',
];
const movieList = document.getElementById('movieList')
const addMovie = document.getElementById('addMovie')
const movieName = document.getElementById('movieName')
const moviePoster = document.getElementById('moviePoster')

addMovie.addEventListener('click', () => {

    movieTitles.push(movieName.value)
    moviePosters.push(moviePoster.value)


    renderMovies()
})


function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');

        const poster = document.createElement('img');

        const delet = document.createElement('button')
        delet.textContent = 'удалить'
        delet.addEventListener('click', () => {
            movieTitles.splice(index, 1)
            moviePosters.splice(index, 1)
            renderMovies()
        })
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        item.append(poster, title, delet);
        movieList.append(item);

    });
}


renderMovies();