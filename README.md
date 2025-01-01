# MovieFlix 🎬

A dynamic movie and TV show browsing application built with vanilla JavaScript, featuring a wishlist system and responsive design.

## Live Demo 🌐
[View Live Demo](#) <!-- Add your deployment URL -->

![MovieFlix Screenshot](images/screenshot.png)

## Features ✨

### Movie & TV Show Browsing
- Browse top-rated movies and TV shows
- Real-time search functionality
- Dynamic genre tagging
- Rating system with visual indicators
- Release year information

### Smart Wishlist System
- Add movies and TV shows to wishlist
- Persistent storage using localStorage
- Automatic duplicate prevention
- Cross-section wishlist functionality
- Search within wishlist items

### User Interface
- Clean, modern responsive design
- Smooth hover animations
- Active state indicators
- Back-to-top navigation
- Consistent styling across pages

## Tech Stack 🛠️

- Vanilla JavaScript (ES6+)
- HTML5 & CSS3
- TMDB API
- LocalStorage API
- Font Awesome Icons

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MovieFlix.git
```

2. Get TMDB API Key:
- Visit [TMDB Website](https://www.themoviedb.org/)
- Create an account and request an API key
- Copy your API key

3. Add API Key:
- Navigate to `scripts/config.js`
- Replace `your_api_key_here` with your TMDB API key

4. Run the application:
- Open `index.html` in your browser
- Or use a local server: `npx http-server`

## Project Structure 📁

```
MovieFlix/
├── scripts/
│   ├── script.js      # Main movie functionality
│   ├── tvShows.js     # TV shows handling
│   ├── watchList.js   # Wishlist management
│   └── objects.js     # Shared objects & classes
├── styles/
│   └── styles.css     # Global styles
└── pages/
    ├── tvShows.html   # TV shows page
    └── watchList.html # Wishlist page
```

## Key Features Explained 🔍

### Movies & TV Shows
- Fetches top-rated content from TMDB API
- Dynamic card generation with hover effects
- Genre mapping and display
- Rating display with star icons
- Smooth transitions and animations

### Wishlist System
- Cross-section wishlist (movies & TV shows)
- Duplicate entry prevention
- Persistent storage
- Active state synchronization
- Easy add/remove functionality

### Search Features
- Real-time search in movies
- Real-time search in TV shows
- Search within wishlist
- Clear results display

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing 🤝

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push to the branch: `git push origin feature/NewFeature`
5. Submit a pull request

## Future Enhancements 🚀

- [ ] Sorting functionality
- [ ] Advanced filtering
- [ ] Movie details page
- [ ] User authentication
- [ ] Personal ratings

## License 📄

This project is licensed under the MIT License.

## Credits 👏

- TMDB API for movie data
- Font Awesome for icons
