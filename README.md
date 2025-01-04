# MovieFlix 🎬

A dynamic movie and TV show browsing application built with vanilla JavaScript and ES6 modules, featuring a smart wishlist system and real-time search functionality.

![MovieFlix Screenshot](/screenshot.png)

## Features ✨

### Core Features
- Browse top-rated movies and TV shows
- Real-time search across all content
- Smart wishlist with duplicate prevention
- Cross-platform persistent storage
- Responsive modern design

### Technical Features
- ES6 Modules architecture
- Local Storage management
- TMDB API integration
- Dynamic content loading
- Modular component structure

## Setup Guide 🚀

1. Clone the repository
```bash
git clone https://github.com/yourusername/MovieFlix.git
```

2. Configure API Key:
- Copy `config.example.js` to `config.js`:
```bash
cp scripts/config.example.js scripts/config.js
```
- Add your TMDB API key in `config.js`:
```javascript
const config = {
    apiKey: 'your_tmdb_api_key_here',
    baseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
};
```

3. Serve the project:
- Use a local server (due to ES6 modules)
- Example using Python:
```bash
python -m http.server 8000
```
- Or using Node.js:
```bash
npx http-server
```

## Project Structure 📁

```
MovieFlix/
├── scripts/
│   ├── config.js         # API configuration (gitignored)
│   ├── config.example.js # Example config template
│   ├── objects.js        # Shared classes and objects
│   ├── script.js         # Main movies logic
│   ├── tvShows.js       # TV shows functionality
│   └── watchList.js     # Wishlist management
├── styles/
│   └── styles.css       # Global styles
└── pages/
    ├── tvShows.html    # TV shows page
    └── watchList.html  # Wishlist page
```

## Implementation Details 🔧

### Module System
- ES6 modules for code organization
- Shared configuration management
- Cross-component communication

### Wishlist System
- LocalStorage persistence
- Automatic duplicate prevention
- Cross-section compatibility
- Real-time sync across pages

### Search System
- Real-time filtering
- Case-insensitive search
- Cross-section search support
- Dynamic results display

## Security 🔒

- API key protection through gitignore
- Configuration file separation
- Secure module imports
- Example configuration template

## Browser Compatibility 🌐

- Requires ES6 module support
- Modern browser compatibility
- Local server requirement
- Responsive design support

## Contributing 🤝

1. Fork the repository
2. Copy and configure `config.js`
3. Make your changes
4. Submit a pull request

## License 📄

MIT License - See LICENSE file

## Acknowledgments 👏

- TMDB API
- Font Awesome
- ES6 Modules
