# MovieFlix 🎬

A modern movie and TV show browsing application built with vanilla JavaScript, utilizing the TMDB API.

![MovieFlix Screenshot](images/screenshot.png)

## Features ✨

- Browse popular movies and TV shows
- Search functionality for both movies and TV shows
- Add items to wishlist with local storage persistence
- Responsive design for all devices
- Genre categorization
- Rating and release year display
- Back to top functionality
- Dynamic content loading

## Technologies Used 🛠️

- HTML5
- CSS3
- Vanilla JavaScript
- TMDB API
- Font Awesome Icons
- Local Storage API

## Setup 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MovieFlix.git
```

2. Create a `config.js` file in the scripts directory:
```javascript
const API_KEY = 'your_tmdb_api_key';
export default API_KEY;
```

3. Replace `your_tmdb_api_key` with your actual TMDB API key.

4. Open `index.html` in your browser.

## Project Structure 📁

```
MovieFlix/
├── images/
│   └── logo.jpg
├── pages/
│   ├── tvShows.html
│   └── watchList.html
├── scripts/
│   ├── config.js
│   ├── objects.js
│   ├── script.js
│   ├── tvShows.js
│   └── watchList.js
├── styles/
│   └── styles.css
└── index.html
```

## Features in Detail 🔍

### Movies
- View popular movies
- See ratings, release years, and genres
- Add/remove from wishlist
- Search functionality

### TV Shows
- Browse popular TV series
- View show details
- Add to wishlist
- Search capability

### Wishlist
- Persistent storage using localStorage
- Remove items from wishlist
- View all saved content in one place

## API Integration 🔗

This project uses the TMDB API for fetching:
- Movie data
- TV show information
- Genre listings
- Poster images

## Contributing 🤝

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push to the branch: `git push origin feature/NewFeature`
5. Submit a pull request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 👏

- [TMDB](https://www.themoviedb.org/) for their excellent API
- [Font Awesome](https://fontawesome.com/) for the icons
- All contributors and supporters
