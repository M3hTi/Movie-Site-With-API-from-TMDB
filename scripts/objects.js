export const wishList = {
    movies: [],
    addMovie: function(obj) {
        this.movies.push(obj)
    },
    removeMovie: function(obj) {
        const index = this.movies.findIndex(movie => movie.id === obj.id)
        if (index !== -1) {
            this.movies.splice(index, 1)
        }
    }
}

export function Movie(image, title, rating, year, genres, id) {
    this.image = image
    this.title = title
    this.rating = rating
    this.year = year
    this.genres = genres
    this.id = id
}

