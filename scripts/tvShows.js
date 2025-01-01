const myApi = 'a4feb3cb322b24cafb3f53a88b4aaeba'

const baseUrl = 'https://api.themoviedb.org/3';

const grid = document.querySelector('.movies-grid');
const inputSearch = document.querySelector('.js-input');
const searchBtn = document.querySelector('.js-search-btn');

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
    37: 'Western',
    10765: 'Sci-Fi & Fantasy',
    10759: 'Action & Adventure'
};


fetch(`${baseUrl}/discover/tv?api_key=${myApi}&sort_by=vote_average.desc&vote_count.gte=100`)
.then(response => {
    if(!response.ok) throw new Error(`status : ${response.status}`);
    return response.json();
})
.then(data => {
    console.log(data); 
    const tvShows = data.results;
    console.log(tvShows);
    showTvShows(tvShows);
    inputSearch.addEventListener('keydown', (e) => {
        searchTvShows(e, tvShows);
    });
    searchBtn.addEventListener('click', (e) => {
        searchTvShows(e, tvShows);
    });
})
.catch(error => {
    console.log(error);
});


function showTvShows(arr) {
    arr.forEach(element => {
        const tvShowCard = document.createElement('div');
        tvShowCard.className = 'movie-card';
        grid.appendChild(tvShowCard);


        const tvShowPoster = document.createElement('div');
        tvShowPoster.className = 'movie-poster';
        tvShowCard.appendChild(tvShowPoster);

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        tvShowPoster.appendChild(poster);

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        tvShowPoster.appendChild(overlay);

        const wishListBtn = document.createElement('button');
        wishListBtn.className = 'wishlist-btn';
        overlay.appendChild(wishListBtn);

        const icon = document.createElement('i');
        icon.className = 'fas fa-heart';
        wishListBtn.appendChild(icon);

        const span = document.createElement('span');
        span.textContent = 'wishList';
        wishListBtn.appendChild(span);

        wishListBtn.addEventListener('click', () => {
            const image = element.poster_path
            const name = element.name
            const rating = element.vote_average
            const year = element.first_air_date.split('-')[0]
            const genres = element.genre_ids.map(id => genreMap[id])
            const id = element.id

            const tvShow = new Movie(image, name, rating, year, genres, id);

            // console.log(tvShow);

            if(!wishListBtn.classList.contains('active')){
                wishList.movies = matchWishList();
                wishList.addMovie(tvShow);
                localStorage.setItem('wishList', JSON.stringify(wishList.movies));
                wishListBtn.classList.add('active');
            }else{
                const moviesList = matchWishList()  // Add this line
                wishList.movies = moviesList        // Add this line
                wishList.removeMovie(tvShow);
                localStorage.setItem('wishList', JSON.stringify(wishList.movies))
                wishListBtn.classList.remove('active');
            }
        })

        const tvShowsInfo = document.createElement('div');
        tvShowsInfo.className = 'movie-info';
        tvShowCard.appendChild(tvShowsInfo);

        const title = document.createElement('h3');
        title.textContent = element.name;
        tvShowsInfo.appendChild(title);

        const tvShowsMeta = document.createElement('div');
        tvShowsMeta.className = 'movie-meta';
        tvShowsInfo.appendChild(tvShowsMeta);


        const rating = document.createElement('span');
        rating.className = 'rating';

        const star = document.createElement('i');
        star.className = 'fas fa-star';
        rating.appendChild(star);

        rating.appendChild(document.createTextNode(element.vote_average.toFixed(1)));
        tvShowsMeta.appendChild(rating);

        const year = document.createElement('span');
        year.className = 'year';
        year.textContent = element.first_air_date.split('-')[0];
        tvShowsMeta.appendChild(year);

        const genresShows = document.createElement('div')
        genresShows.className = 'genre-tags';
        tvShowsInfo.appendChild(genresShows);

        element.genre_ids.forEach(id => {
            const genre = document.createElement('span');
            genre.textContent = genreMap[id];
            genresShows.appendChild(genre);
        });

        syncWishList(arr);

    });
}


function searchTvShows(e, arr) {
    if(e.type = 'click' || (e.type === 'keydown' && e.key === 'Enter')){
        const searchValue = inputSearch.value.toLowerCase();
        
        const searchTv =  arr.filter( element => element.name.toLowerCase().includes(searchValue));

        grid.innerHTML = '';
        showTvShows(searchTv);
    }
    
}

function matchWishList(){
    const wishList = JSON.parse(localStorage.getItem('wishList') || '[]')
    return wishList
}


function syncWishList(arr) {
    const watchList = matchWishList();

    const movieCards = document.querySelectorAll('.movie-card')


    movieCards.forEach((card,index) => {
        const currentMovie = arr[index];

        const isInWishLIst = watchList.some(movie => movie.id === currentMovie.id);

        if(isInWishLIst){
            card.querySelector('.wishlist-btn').classList.add('active');
        }
    });
}
