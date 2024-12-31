# MovieFlix 🎬

A modern responsive web application for browsing movies and TV shows, built with vanilla JavaScript and the TMDB API. Features a clean interface, search functionality, and wishlist management.

## Live Demo 🌐
[View Live Demo](#) <!-- Add your deployment URL -->

![MovieFlix Screenshot](images/screenshot.png)

## Features ✨

### Core Functionality
- Browse popular movies and TV shows
- Advanced search functionality
- Persistent wishlist system
- Duplicate prevention in wishlist
- Responsive design for all devices

### User Interface
- Clean, modern design
- Smooth animations and transitions
- Genre categorization with tags
- Rating and release year display
- Back-to-top functionality
- Loading states and error handling

## Technologies Used 🛠️

- HTML5 & CSS3
- Vanilla JavaScript (ES6+)
- TMDB API Integration
- Local Storage
- Font Awesome Icons
- CSS Custom Properties
- CSS Grid & Flexbox

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
├── images/
│   └── logo.jpg
├── pages/
│   ├── tvShows.html    # TV shows page
│   └── watchList.html  # Wishlist management
├── scripts/
│   ├── config.js      # API configuration
│   ├── objects.js     # Classes and objects
│   ├── script.js      # Main JavaScript
│   ├── tvShows.js     # TV shows logic
│   └── watchList.js   # Wishlist logic
├── styles/
│   └── styles.css     # Main stylesheet
└── index.html         # Entry point
```

## Features in Detail 🔍

### Movies & TV Shows
- View popular and trending content
- Detailed information display
- Dynamic genre tags
- Rating system with star display
- Release year information

### Search System
- Real-time search functionality
- Search in movies and TV shows
- Clean results display
- Error handling for no results

### Wishlist
- Add/remove items
- Persistent storage
- Duplicate prevention
- Search within wishlist
- Clean wishlist management

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

- [ ] Advanced filtering options
- [ ] User authentication
- [ ] Movie/Show details page
- [ ] Trailer integration
- [ ] User ratings and reviews
- [ ] Social sharing functionality

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 👏

- [TMDB](https://www.themoviedb.org/) for their comprehensive API
- [Font Awesome](https://fontawesome.com/) for the icons
- All contributors and supporters
