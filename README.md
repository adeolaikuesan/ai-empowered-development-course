# Vibe Code Demo

A small todo application built with vanilla HTML, CSS, and JavaScript designed to test your AI-empowered development skills.

**📚 Course Material:** All bootcamp content, exercises, and learning materials are located in the [Course Material](./Course%20Material/README.md) folder. Start there to begin the AI-Assisted Development Bootcamp.

## Setup

### Requirements
- Node.js and npm

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RBirkeland/vibe-code-demo
   cd vibe-code-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Follow the URL provided by Vite in the terminal (typically `http://localhost:5173`)

That's it! The app should now be running locally with hot reload enabled.

## Project Structure

```
vibe-code-demo/
├── index.html      # Main HTML markup - contains the app layout
├── styles.css      # All CSS styling for the app
├── main.js         # Application logic (add, delete, filter todos)
├── package.json    # Project dependencies and scripts
└── vite.config.js  # Vite configuration
```

**How it works:**
- `index.html` defines the structure (input field, buttons, todo list)
- `styles.css` styling
- `main.js` handles all the interactivity (adding todos, marking complete, filtering)
