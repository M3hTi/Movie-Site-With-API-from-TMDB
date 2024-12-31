const movieGrid = document.querySelector('.movies-grid')
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

function getWatchList() {
    let watchList = JSON.parse(localStorage.getItem('wishList'))
    if (watchList) {
        watchList = deleteDuplicateMovies(watchList)
        localStorage.setItem('wishList', JSON.stringify(watchList)) // Save deduplicated list
        showWatchList(watchList)
    }
}

function showWatchList(arr) {

    arr.forEach(element => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card'
        movieGrid.appendChild(movieCard)
        
        const moviePoster = document.createElement('div')
        moviePoster.className = 'movie-poster'
        movieCard.appendChild(moviePoster)


        const poster = document.createElement('img')
        poster.src = `${imageBaseUrl}${element.image}`  // Add the base URL to the image path
        moviePoster.appendChild(poster)

        const overlay = document.createElement('div')
        overlay.className = 'overlay'
        moviePoster.appendChild(overlay)

        const button = document.createElement('button')
        button.className = 'wishlist-btn'
        overlay.appendChild(button)

        const icon = document.createElement('i')
        icon.className = 'fas fa-trash'  // Changed to trash icon for remove action
        button.appendChild(icon)         // Append icon to button
       

        const span = document.createElement('span')
        span.textContent = 'Remove'
        button.appendChild(span)


        button.addEventListener('click', () => {
            const watchList = JSON.parse(localStorage.getItem('wishList'))

            const index = watchList.findIndex(movie => movie.id === element.id)

            if (index !== -1) {
                watchList.splice(index, 1)
                localStorage.setItem('wishList', JSON.stringify(watchList))
                movieGrid.innerHTML = ''
                showWatchList(watchList)
            }
        })



        const movieInfo = document.createElement('div')
        movieInfo.className = 'movie-info'
        movieCard.appendChild(movieInfo)


        const title = document.createElement('h3')
        title.textContent = element.title
        movieInfo.appendChild(title)


        const movieMeta = document.createElement('div')
        movieMeta.className = 'movie-meta'
        movieInfo.appendChild(movieMeta)


        const rating = document.createElement('span')
        rating.className = 'rating'
        
        const starIcon = document.createElement('i')
        starIcon.className = 'fas fa-star'
        rating.appendChild(starIcon)           // Add star first
        
        rating.appendChild(document.createTextNode(` ${element.rating}`))  // Then add rating text with space
        movieMeta.appendChild(rating)

        const year = document.createElement('span')
        year.className = 'year'
        year.textContent = element.year
        movieMeta.appendChild(year)

        const movieTags = document.createElement('div')
        movieTags.className = 'genre-tags'
        movieInfo.appendChild(movieTags)

        element.genres.forEach(genre => {
            const tag = document.createElement('span')
            tag.textContent = genre
            movieTags.appendChild(tag)
        })

    });

}

function deleteDuplicateMovies(arr) {
    // Use filter with Set to keep only unique movies based on ID
    const uniqueIds = new Set()
    return arr.filter(movie => {
        if (!uniqueIds.has(movie.id)) {
            uniqueIds.add(movie.id)
            return true
        }
        return false
    })
}

window.addEventListener('load', getWatchList)