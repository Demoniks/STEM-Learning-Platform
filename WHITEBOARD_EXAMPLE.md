# Whiteboard Examples

How to create and embed Excalidraw diagrams into concept sections.

---

## Creating a Diagram

1. Go to [excalidraw.com](https://excalidraw.com)
2. Draw your diagram using the shape, arrow, and text tools
3. Click the menu (top left) → **Save to...** → download as `.excalidraw`
4. Open the file in a text editor — it is JSON
5. Copy the `elements` array

---

## Adding to a Concept

```javascript
{
    name: "Complex Plane",
    paragraph: `<p>Complex numbers can be plotted on the <strong>complex plane</strong>.</p>`,
    whiteboard: {
        elements: [
            // paste the elements array from your .excalidraw file here
        ],
        appState: {
            viewBackgroundColor: "#ffffff"
        }
    }
}
```

The whiteboard renders as a read-only embedded diagram inside the concept card. Students cannot edit it.

---

## Keeping Data Files Clean

For large diagrams, store the data separately:

**`src/components/mathSections/whiteboardData.js`**

```javascript
export const complexPlaneDiagram = {
    elements: [ /* ... */ ],
    appState: { viewBackgroundColor: "#ffffff" }
};

export const vectorAdditionDiagram = {
    elements: [ /* ... */ ],
    appState: { viewBackgroundColor: "#ffffff" }
};
```

**Then import in the section file:**

```javascript
import { complexPlaneDiagram, vectorAdditionDiagram } from './whiteboardData';

export const mathSections = {
    basicMath: {
        concepts: [
            {
                name: "The Complex Plane",
                whiteboard: complexPlaneDiagram
            }
        ]
    }
};
```

---

## No Diagram Needed

Set `whiteboard: null` or simply omit the field:

```javascript
{
    name: "Adding Complex Numbers",
    code: `z1 = 3 + 2j\nz2 = 1 + 7j\nprint(z1 + z2)`,
    whiteboard: null
}
```

---

## Free Whiteboard (Student Drawing)

The Whiteboard tab contains a fully editable Excalidraw canvas for students to sketch diagrams, work through problems, and take visual notes.

- Drawings auto-save to `localStorage` (`freeWhiteboard` key)
- Persists across page refreshes
- Clear button resets the canvas

Located in `src/components/Whiteboard/FreeWhiteboard.jsx`.

---

## Minimal Example with Diagram Data

```javascript
{
    name: "Variable Assignment",
    code: `x = 10\nprint(x)`,
    explanation: "Python stores the value 10 in memory and labels it x.",
    hasInteractiveButton: true,
    whiteboard: {
        elements: [
            {
                "type": "rectangle",
                "id": "box1",
                "x": 100, "y": 100,
                "width": 140, "height": 60,
                "backgroundColor": "#a5d8ff",
                "strokeColor": "#1e1e1e",
                "fillStyle": "solid",
                "strokeWidth": 2,
                "roughness": 1,
                "opacity": 100,
                "angle": 0,
                "isDeleted": false,
                "version": 1,
                "versionNonce": 1,
                "seed": 1,
                "groupIds": [],
                "frameId": null,
                "roundness": { "type": 3 },
                "boundElements": [],
                "updated": 1,
                "link": null,
                "locked": false
            },
            {
                "type": "text",
                "id": "label1",
                "x": 120, "y": 120,
                "width": 100, "height": 25,
                "text": "x = 10",
                "fontSize": 18,
                "fontFamily": 1,
                "textAlign": "center",
                "verticalAlign": "middle",
                "strokeColor": "#1e1e1e",
                "backgroundColor": "transparent",
                "fillStyle": "solid",
                "strokeWidth": 2,
                "roughness": 1,
                "opacity": 100,
                "angle": 0,
                "isDeleted": false,
                "version": 1,
                "versionNonce": 1,
                "seed": 2,
                "groupIds": [],
                "frameId": null,
                "roundness": null,
                "boundElements": [],
                "updated": 1,
                "link": null,
                "locked": false,
                "containerId": null,
                "originalText": "x = 10",
                "lineHeight": 1.25
            }
        ],
        appState: {
            viewBackgroundColor: "#ffffff"
        }
    }
}
```
