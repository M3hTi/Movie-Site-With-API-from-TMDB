const wishList = {
    movies : [],
    addMovie :  function(obj){
        this.movies.push(obj)
    },
    removeMovie : function(obj){
        this.movies.splice(this.movies.indexOf(obj), 1)
    }
}





function Movie (image, title, rating, year, genres, id) {
    this.image = image
    this.title = title
    this.rating = rating
    this.year = year
    this.genres = genres
    this.id = id
}

