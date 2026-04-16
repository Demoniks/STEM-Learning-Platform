# Implementation Summary

A record of major features built into the platform.

---

## Current Feature Set

### Live Python Editor

- Powered by Pyodide (Python WebAssembly runtime — no backend required)
- Write, run, and view output directly in the browser
- Preset example code snippets selectable from the editor
- Located in `src/components/CodeEditor/CodeEditor.jsx`

### Multi-Subject Navigation

- Three subject categories: Python Basics, Mathematics, Physics
- Sidebar navigation built from the section data files
- Switching categories auto-selects the first section
- Located in `src/components/NavigationMenu/NavigationMenu.jsx`

### Blog-Style Concept Sections

- `paragraph` field renders HTML with full tag support
- Tables, lists, blockquotes, inline code all styled via Tailwind arbitrary variants
- `explanation` field renders a blue left-border callout
- `code` field renders a dark terminal block with green monospace text

### Whiteboard Integration (Excalidraw)

- `WhiteboardViewer` — read-only diagram embedded per concept
- `FreeWhiteboard` — fully editable canvas in the Whiteboard tab with localStorage auto-save

### Three View Modes

- **Learn** — concept cards with paragraph, code, explanation, and optional diagram
- **Editor** — live Python code editor with presets
- **Whiteboard** — freehand drawing canvas

---

## Component Architecture

```text
PythonBasicsGuide
├── NavigationMenu
├── Learn mode
│   ├── Section header (title, description, icon)
│   └── Concept cards
│       ├── name (h3)
│       ├── paragraph (HTML via dangerouslySetInnerHTML)
│       ├── code (pre block)
│       ├── explanation (blue callout)
│       ├── WhiteboardViewer (if whiteboard data exists)
│       └── hasInteractiveButton button (if true)
├── Editor mode
│   └── CodeEditor
└── Whiteboard mode
    └── FreeWhiteboard
```

---

## Dependencies

| Package | Purpose |
| --- | --- |
| `react` 19 | UI framework |
| `vite` (rolldown) | Build tool |
| `tailwindcss` 3 | Styling |
| `@tailwindcss/typography` | Prose styling for HTML content |
| `pyodide` | Python runtime in the browser |
| `@excalidraw/excalidraw` | Whiteboard and diagram viewer |
| `lucide-react` | Icons |

---

## Data Structure

Each section in a data file follows this shape:

```javascript
sectionKey: {
    title: "Section Title",
    icon: <IconComponent className="w-5 h-5" />,
    description: "One-line summary.",
    concepts: [
        {
            name: "Concept Name",           // optional
            paragraph: `<p>HTML</p>`,       // optional
            code: `python code`,            // optional
            explanation: "plain text",      // optional
            whiteboard: { elements, appState } | null,  // optional
            hasInteractiveButton: true | false  // optional
        }
    ]
}
```

---

## LocalStorage

| Key | Data | Used by |
| --- | --- | --- |
| `freeWhiteboard` | Excalidraw JSON (elements + appState) | FreeWhiteboard auto-save |
