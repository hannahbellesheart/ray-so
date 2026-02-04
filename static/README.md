# Ray.so - Static Version

A pure HTML5/CSS/JavaScript version of ray.so code screenshot generator. No Node.js or build tools required!

## Features

- 🎨 **Multiple Themes**: Choose from 5 beautiful gradient themes (Candy, Breeze, Midnight, Sunset, Raindrop)
- 🌓 **Dark/Light Mode**: Toggle between dark and light code editor themes
- 💻 **18+ Languages**: Syntax highlighting for JavaScript, TypeScript, Python, HTML, CSS, Java, C#, C++, Go, Rust, PHP, Ruby, Swift, Kotlin, JSON, XML, SQL, Bash
- 🎯 **Customizable**: Control background visibility, line numbers, padding, and file names
- 📸 **Export to PNG**: Download your code as a high-quality image
- 📋 **Copy Code**: Quick copy to clipboard
- 🎭 **Live Preview**: See changes in real-time

## How to Use

### Option 1: Open Directly in Browser

Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Use a Local Server

For the best experience, serve the files using any HTTP server:

#### Python 3

```bash
cd static
python -m http.server 8000
```

Then open: http://localhost:8000

#### Python 2

```bash
cd static
python -m SimpleHTTPServer 8000
```

#### Node.js (http-server)

```bash
cd static
npx http-server -p 8000
```

#### PHP

```bash
cd static
php -S localhost:8000
```

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and theme definitions
- `app.js` - Application logic and interactivity

## External Dependencies

The following libraries are loaded from CDN:

- **Highlight.js** (v11.9.0) - Syntax highlighting
- **html2canvas** - PNG export functionality

These are loaded automatically from CDN, so an internet connection is required for full functionality.

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Usage Tips

1. **Type or paste** your code in the editor
2. **Select the language** for proper syntax highlighting
3. **Choose a theme** that matches your style
4. **Adjust settings** like background, dark mode, line numbers, and padding
5. **Export** your beautiful code screenshot!

## Keyboard Shortcuts

- `Tab` - Insert 2 spaces (proper indentation)
- `Ctrl/Cmd + A` - Select all code
- `Ctrl/Cmd + C` - Copy code

## Customization

You can easily customize themes by editing the CSS variables in `styles.css`:

```css
:root {
  --theme-bg: linear-gradient(140deg, #667eea 0%, #764ba2 100%);
  --theme-window-bg: #1e1e1e;
  --theme-text: #d4d4d4;
  --theme-window-header: #323233;
}
```

## Known Limitations

- Export quality depends on browser canvas support
- Very large code snippets may affect performance
- Some complex Unicode characters may not render perfectly

## Credits

Based on [ray.so](https://ray.so) by [Raycast](https://raycast.com)

## License

This static version is provided as-is for educational and personal use.
