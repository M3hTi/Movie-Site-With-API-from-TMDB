const apiKey = 'a4feb3cb322b24cafb3f53a88b4aaeba'

const baseUrl = 'https://api.themoviedb.org/3';

const moviesGrid = document.querySelector('.movies-grid')
const inputSearch = document.querySelector('.js-input')
const searchBtn = document.querySelector('.js-seach-btn')

const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci-Fi',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
};


fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=vote_average.desc&vote_count.gte=1000`)
.then(response =>{
    if(!response.ok) throw new Error(`status : ${response.status}`);
    return response.json();
})
.then(data =>{
    console.log(data);
    const movies = data.results;
    showMovies(movies)
    inputSearch.addEventListener('keydown', (e) => {  // Add 'e' parameter here
        searchMovies(e, movies)
    })
    searchBtn.addEventListener('click', (e) => {      // Add 'e' parameter here for consistency
        searchMovies(e, movies)
    })
})
.catch(error =>{
    console.log(error);
})



function showMovies(arr) {
    moviesGrid.innerHTML = '';  // Clear the grid before showing new results
    arr.forEach( element => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card'
        moviesGrid.appendChild(movieCard)


        const moviePoster = document.createElement('div')
        moviePoster.className = 'movie-poster'
        movieCard.appendChild(moviePoster)

        const poster = document.createElement('img')
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`
        moviePoster.appendChild(poster)

        const overlay = document.createElement('div')
        overlay.className = 'overlay'
        moviePoster.appendChild(overlay)


        const wishListBtn = document.createElement('button')
        wishListBtn.className = 'wishlist-btn'
        overlay.appendChild(wishListBtn)

        const icon = document.createElement('i')
        icon.className = 'fas fa-heart'
        wishListBtn.appendChild(icon)

        const span = document.createElement('span')
        span.textContent = 'Wishlist'
        wishListBtn.appendChild(span)

        wishListBtn.addEventListener('click', () => {
            const image = element.poster_path
            const title = element.title
            const rating = element.vote_average.toFixed(1)
            const year = element.release_date.split('-')[0]
            const genres = element.genre_ids.map(id => genreMap[id])
            const id = element.id

            const movie = new Movie(image, title, rating, year, genres, id)
            
            if (!wishListBtn.classList.contains('active')) {
                wishList.addMovie(movie)
                localStorage.setItem('wishList', JSON.stringify(wishList.movies))
                wishListBtn.classList.add('active')
            } else {
                wishList.removeMovie(movie)
                localStorage.setItem('wishList', JSON.stringify(wishList.movies))
                wishListBtn.classList.remove('active')
            }
            
            // console.log(wishList.movies)
        })


        const movieInfo = document.createElement('div')
        movieInfo.className = 'movie-info'
        movieCard.appendChild(movieInfo)

        const movieTitle = document.createElement('h3')
        movieTitle.textContent = element.title
        movieInfo.appendChild(movieTitle)

        const movieMeta = document.createElement('div')
        movieMeta.className = 'movie-meta'
        movieInfo.appendChild(movieMeta)

        const rating = document.createElement('span')
        rating.className = 'rating'
        
        const star = document.createElement('i')
        star.className = 'fas fa-star'
        rating.appendChild(star)
        
        rating.appendChild(document.createTextNode(` ${element.vote_average.toFixed(1)}`))
        movieMeta.appendChild(rating)


        const year = document.createElement('span')
        year.className = 'year'
        year.textContent = element.release_date.split('-')[0]
        movieMeta.appendChild(year)
        
        
        const genres = document.createElement('div')
        genres.className = 'genre-tags'
        movieInfo.appendChild(genres)


        const genreList = element.genre_ids;

        genreList.forEach(genreId => {
            const genre = document.createElement('span')
            genre.textContent = genreMap[genreId]
            genres.appendChild(genre)
        });

    });

}


function searchMovies(e, movies) {
    if(e.type === 'click' || e.key === 'Enter'){
        const searchValue = inputSearch.value.toLowerCase()

        // console.log(movies);

        const matchesMovie = movies.filter( movie => movie.title.toLowerCase().includes(searchValue))
        moviesGrid.innerHTML = '';  // Clear grid before showing search results
        showMovies(matchesMovie)
    }
}

