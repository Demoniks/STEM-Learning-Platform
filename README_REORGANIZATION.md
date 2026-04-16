# Project Reorganization Notes

Documents the structural changes made from the original single-file setup to the current component-based architecture.

---

## What Changed

### Before

Everything was in a single `src/App.jsx` file (473+ lines) with no separation between UI, data, and logic.

### After

```text
src/
├── components/
│   ├── CodeEditor/
│   │   ├── CodeEditor.jsx
│   │   └── exampleCodes.js
│   ├── mathSections/
│   │   └── mathSections.jsx
│   ├── PhysicSections/
│   │   └── physicSections.jsx
│   ├── PythonTopics/
│   │   ├── PythonBasicsGuide.jsx
│   │   └── pythonSections.jsx
│   ├── NavigationMenu/
│   │   └── NavigationMenu.jsx
│   └── Whiteboard/
│       ├── WhiteboardViewer.jsx
│       └── FreeWhiteboard.jsx
├── App.jsx       (8 lines)
├── main.jsx
└── index.css
```

---

## Key Decisions

| Decision | Reason |
| --- | --- |
| Separate data files from components | Content (topics, concepts) changes often; UI components change rarely. Keeping them apart means editing content without touching UI code. |
| One folder per component | Keeps component file and its data file together. Easy to find, easy to delete if a section is removed. |
| Three subject data files | Python, Math, Physics grow independently. One file per subject avoids merge conflicts and keeps files manageable. |
| `dangerouslySetInnerHTML` for `paragraph` | Required for rendering HTML strings. Scoped to a controlled `div` with Tailwind styling — content comes from the project's own data files, not user input. |

---

## Files That Can Be Deleted

If they still exist from the original structure:

- `src/CodeEditor.jsx` — replaced by `src/components/CodeEditor/CodeEditor.jsx`
- `src/App.css` — replaced by Tailwind via `index.css`

---

## Current Structure Reference

See `PROJECT_STRUCTURE.md` for the full current layout and component relationships.
