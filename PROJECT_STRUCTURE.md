# Project Structure

## Directory Layout

```text
src/
├── components/
│   ├── CodeEditor/
│   │   ├── CodeEditor.jsx        # Live Python editor powered by Pyodide
│   │   └── exampleCodes.js       # Preset code snippet data
│   ├── mathSections/
│   │   └── mathSections.jsx      # Math topic content (Complex Numbers, Vectors, etc.)
│   ├── PhysicSections/
│   │   └── physicSections.jsx    # Physics topic content
│   ├── PythonTopics/
│   │   ├── PythonBasicsGuide.jsx # Main renderer — navigation, layout, concept cards
│   │   └── pythonSections.jsx    # Python topic content (variables, loops, etc.)
│   ├── NavigationMenu/
│   │   └── NavigationMenu.jsx    # Sidebar category and section navigation
│   └── Whiteboard/
│       ├── WhiteboardViewer.jsx  # Read-only Excalidraw viewer for embedded diagrams
│       └── FreeWhiteboard.jsx    # Fully editable whiteboard with auto-save
├── App.jsx                       # Root component — wraps PythonBasicsGuide
├── main.jsx                      # React DOM entry point
└── index.css                     # Global styles (Tailwind imports)
```

---

## Component Relationships

```text
main.jsx
└── App.jsx
    └── PythonBasicsGuide.jsx
        ├── NavigationMenu.jsx
        ├── [Learn mode]
        │   ├── concept cards (paragraph, code, explanation)
        │   └── WhiteboardViewer.jsx  (per concept, if whiteboard data exists)
        ├── [Editor mode]
        │   └── CodeEditor.jsx
        │       └── exampleCodes.js
        └── [Whiteboard mode]
            └── FreeWhiteboard.jsx
```

---

## Content Data Files

All topic content lives in data files separate from UI components.

| Subject | File |
| --- | --- |
| Python | `src/components/PythonTopics/pythonSections.jsx` |
| Mathematics | `src/components/mathSections/mathSections.jsx` |
| Physics | `src/components/PhysicSections/physicSections.jsx` |

Each file exports an object where every key is a section (e.g. `complexNumbers`, `vectors`) containing:

- `title` — section heading
- `icon` — Lucide React icon component
- `description` — one-line summary shown under the title
- `concepts` — array of concept objects (see `CONCEPT_STRUCTURE_GUIDE.md`)

---

## Adding Content

**New topic section** — add a key to the relevant data file (e.g. `mathSections.jsx`). It appears in the sidebar automatically.

**New concept within a topic** — add an object to the `concepts` array of that section.

**New code editor example** — add an entry to `exampleCodes.js`.

**New subject category** — create a new data file, add it to the `categories` object in `PythonBasicsGuide.jsx`, and add a `NavigationMenu` entry.

---

## Naming Conventions

| Type | Convention | Example |
| --- | --- | --- |
| Component files | PascalCase | `CodeEditor.jsx` |
| Data files | camelCase | `mathSections.jsx` |
| Component folders | PascalCase | `CodeEditor/` |
| Section keys | camelCase | `complexNumbers` |
