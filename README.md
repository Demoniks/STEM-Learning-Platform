# STEM Research Learning Platform

An interactive learning platform for STEM research — covering Python programming, Mathematics, and Physics with a live code editor, whiteboard tools, and blog-style concept breakdowns.

![React](https://img.shields.io/badge/react-19.x-61dafb.svg)
![Vite](https://img.shields.io/badge/vite-rolldown-646cff.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.x-38bdf8.svg)
![Pyodide](https://img.shields.io/badge/pyodide-0.29-3572A5.svg)

## Live Demo

[https://demoniks.github.io/STEM-Learning-Platform/](https://demoniks.github.io/STEM-Learning-Platform/)

---

## Features

- **Live Python Editor** — Write and run Python directly in the browser powered by Pyodide (no server needed)
- **Interactive Whiteboard** — Freehand drawing and diagram tool via Excalidraw integration
- **Blog-style Concept Sections** — Rich HTML explanations with formatted tables, lists, and callouts
- **Multi-subject Navigation** — Switch between Python, Mathematics, and Physics from a unified sidebar
- **Code Examples** — Syntax-highlighted code blocks with copy support
- **Responsive Layout** — Works on desktop and tablet

---

## Subjects Covered

### Python Basics

- Variables and data types
- Conditionals and loops
- Lists and data structures
- Functions and classes

### Mathematics

- Complex Numbers — real/imaginary parts, operations, Python's `complex` type
- Vectors — magnitude, direction, dot product with NumPy
- Matrices, Determinants, Eigenvectors
- Differentiation, Integration, Partial Derivatives

### Physics

- Topics in progress

---

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI framework |
| [Vite (rolldown)](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Pyodide](https://pyodide.org/) | Python runtime in the browser (WebAssembly) |
| [Excalidraw](https://excalidraw.com/) | Embedded whiteboard |
| [Lucide React](https://lucide.dev/) | Icons |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | Blog-style prose rendering |

---

## Running Locally

**Prerequisites:** Node.js 20.x or higher

```bash
# Clone the repo
git clone https://github.com/Demoniks/STEM-Learning-Platform.git
cd STEM-Learning-Platform

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## How to Use

1. **Pick a subject** — Use the top navigation to switch between Python, Mathematics, and Physics
2. **Select a topic** — Click any topic in the sidebar to load its concept sections
3. **Read the breakdown** — Each concept has a blog-style explanation, code examples, and key insight callouts
4. **Open the editor** — Switch to the Live Editor tab to write and run Python code in the browser
5. **Use the whiteboard** — Switch to the Whiteboard tab to sketch diagrams and work through problems freehand

---

## Project Structure

```text
src/
  components/
    CodeEditor/        # Live Python editor (Pyodide)
    mathSections/      # Math topic data and content
    PhysicSections/    # Physics topic data and content
    PythonTopics/      # Python topic data and main guide renderer
    NavigationMenu/    # Sidebar navigation
    Whiteboard/        # Excalidraw whiteboard components
```

---

## Contributing

Contributions welcome — especially new topic content for Mathematics and Physics sections.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/topic-name`)
3. Commit your changes (`git commit -m 'Add ...'`)
4. Push and open a Pull Request

---

## Author

**Demoniks** — [@Demoniks](https://github.com/Demoniks)

Issues and suggestions: [open an issue](https://github.com/Demoniks/Python_Fundamentals/issues)
