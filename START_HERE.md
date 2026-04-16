# Start Here

## What This Project Is

An interactive STEM research learning platform built with React and Vite. It covers Python programming, Mathematics, and Physics through structured concept sections, a live in-browser Python editor, and an integrated whiteboard tool.

---

## Three Modes

| Mode | What it does |
| --- | --- |
| **Learn** | Browse topic sections with blog-style explanations, code blocks, and optional diagrams |
| **Editor** | Write and run Python directly in the browser (powered by Pyodide — no server needed) |
| **Whiteboard** | Freehand drawing canvas for sketching diagrams and working through problems |

---

## Key Files to Know

| File | Purpose |
| --- | --- |
| `src/components/PythonTopics/PythonBasicsGuide.jsx` | Main renderer — controls layout and all three modes |
| `src/components/mathSections/mathSections.jsx` | All Math topic content |
| `src/components/PythonTopics/pythonSections.jsx` | All Python topic content |
| `src/components/PhysicSections/physicSections.jsx` | All Physics topic content |

---

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## Documentation Index

| File | Contents |
| --- | --- |
| `CONCEPT_STRUCTURE_GUIDE.md` | All concept fields, HTML tag support, templates |
| `PROJECT_STRUCTURE.md` | Directory layout and component relationships |
| `QUICK_START_GUIDE.md` | Step-by-step for adding topics, concepts, and diagrams |
| `NEW_FEATURES_GUIDE.md` | Blog-style paragraphs, tables, whiteboard integration |
| `WHITEBOARD_EXAMPLE.md` | How to create and embed Excalidraw diagrams |
| `IMPLEMENTATION_SUMMARY.md` | History of what has been built |
| `README.md` | Public-facing project overview |
