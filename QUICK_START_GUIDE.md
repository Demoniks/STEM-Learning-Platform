# Quick Start Guide

## Running the Project

```bash
npm install     # first time only
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build → dist/
npm run preview # preview the production build
```

---

## Adding a New Math (or Physics) Topic

Open `src/components/mathSections/mathSections.jsx` and add a key to the exported object:

```javascript
export const mathSections = {
    // ... existing sections ...

    linearAlgebra: {
        title: "Linear Algebra",
        icon: <Calculator className="w-5 h-5" />,
        description: "Vectors, matrices, and linear transformations.",
        concepts: [
            {
                name: "What is a Matrix?",
                paragraph: `<p>A <strong>matrix</strong> is a rectangular array of numbers arranged in rows and columns.</p>`,
                code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A)`,
                explanation: "NumPy is the standard library for matrix operations in Python."
            }
        ]
    }
};
```

The new section appears in the sidebar automatically.

---

## Adding a Concept to an Existing Topic

Find the topic's `concepts` array and append an object:

```javascript
{
    name: "Multiplying Complex Numbers",
    paragraph: `<p>Use <strong>FOIL</strong> — same as multiplying binomials:</p>
<blockquote><code>(a + bi)(c + di) = (ac - bd) + (ad + bc)i</code></blockquote>`,
    code: `z1 = 3 + 2j
z2 = 1 + 7j
print(z1 * z2)   # (-11+23j)`,
    explanation: "The key step: i² = -1, so the bd term flips sign.",
    hasInteractiveButton: false
}
```

---

## Adding a Whiteboard Diagram

1. Create your diagram at [excalidraw.com](https://excalidraw.com)
2. Save → Download as `.excalidraw` file
3. Open the file in a text editor and copy the `elements` array
4. Add to a concept:

```javascript
{
    name: "Complex Plane",
    whiteboard: {
        elements: [ /* paste elements here */ ],
        appState: { viewBackgroundColor: "#ffffff" }
    }
}
```

For large diagrams, store the data in a separate file:

```javascript
// src/components/mathSections/whiteboardData.js
export const complexPlaneDiagram = {
    elements: [ /* ... */ ],
    appState: { viewBackgroundColor: "#ffffff" }
};
```

Then import and use:

```javascript
import { complexPlaneDiagram } from './whiteboardData';
// ...
whiteboard: complexPlaneDiagram
```

---

## Quick Reference

| Task | File to edit |
| --- | --- |
| Add/edit Python lesson | `src/components/PythonTopics/pythonSections.jsx` |
| Add/edit Math lesson | `src/components/mathSections/mathSections.jsx` |
| Add/edit Physics lesson | `src/components/PhysicSections/physicSections.jsx` |
| Add code editor preset | `src/components/CodeEditor/exampleCodes.js` |
| Change layout or rendering | `src/components/PythonTopics/PythonBasicsGuide.jsx` |
| Change navigation | `src/components/NavigationMenu/NavigationMenu.jsx` |

---

## Concept Field Reference

See `CONCEPT_STRUCTURE_GUIDE.md` for the full field reference and HTML tag support.
