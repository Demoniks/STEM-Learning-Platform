# Concept Structure Guide

Every topic section (Python, Math, Physics) uses the same concept object format. All fields are optional — only include what the concept needs.

---

## Available Fields

### `name`

The heading displayed above the concept card.

```javascript
{ name: "Complex Numbers" }
```

### `paragraph`

Rich HTML content rendered as blog-style text. Supports all HTML tags.
Styled with Tailwind arbitrary variants — `<ul>`, `<li>`, `<strong>`, `<code>`, `<blockquote>`, and `<table>` all render correctly.

```javascript
{
    paragraph: `<p>A <strong>complex number</strong> is written as <code>a + bi</code>.</p>
<ul>
<li><strong>a</strong> — real part</li>
<li><strong>b</strong> — imaginary part</li>
</ul>`
}
```

> Keep HTML tags flush to the left margin inside the template literal to avoid extra whitespace gaps in the rendered output.

### `code`

Displayed in a dark terminal-style block with green monospace text.

```javascript
{
    code: `z1 = 3 + 2j
z2 = 1 + 7j
print(z1 + z2)  # (4+9j)`
}
```

### `explanation`

Short plain-text note rendered in a blue left-border callout box.

```javascript
{ explanation: "Python uses 'j' instead of 'i' for the imaginary unit." }
```

### `whiteboard`

Excalidraw diagram data embedded as read-only inside the concept card.

```javascript
{
    whiteboard: {
        elements: [ /* paste elements array from .excalidraw file */ ],
        appState: { viewBackgroundColor: "#ffffff" }
    }
}
```

Set to `null` to skip the whiteboard for a concept.

### `hasInteractiveButton`

Shows a "Copy this code" button when `true`. Omit or set `false` to hide.

```javascript
{ hasInteractiveButton: true }
```

---

## Field Combinations

| Use Case | Fields |
| --- | --- |
| Theory explanation | `name`, `paragraph` |
| Code walkthrough | `name`, `paragraph`, `code`, `explanation` |
| Interactive example | `name`, `code`, `hasInteractiveButton: true` |
| Visual concept | `name`, `paragraph`, `whiteboard` |
| Full lesson | all fields |

---

## HTML Tags Supported in `paragraph`

**Text:** `<strong>`, `<em>`, `<code>`, `<mark>`

**Structure:** `<p>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<br>`

**Tables:**

```html
<table>
    <thead><tr><th>Symbol</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td>a</td><td>Real part</td></tr>
        <tr><td>b</td><td>Imaginary part</td></tr>
    </tbody>
</table>
```

---

## Template

```javascript
{
    name: "Concept Name",

    paragraph: `<p>Explain with <strong>formatting</strong> and lists:</p>
<ul>
<li>Key point 1</li>
<li>Key point 2</li>
</ul>`,

    code: `# Python example
result = 3 + 4j
print(result.real, result.imag)`,

    explanation: "Short callout note goes here.",

    hasInteractiveButton: true,

    whiteboard: null
}
```

---

## Tips

- **`paragraph` vs `explanation`** — Use `paragraph` when you need formatting or multiple paragraphs. Use `explanation` for a single plain-text note in the blue callout box.
- **Whiteboard** — Only add where a visual diagram genuinely aids understanding. Store large diagram JSON in a separate `whiteboardData.js` file and import it.
- **HTML indentation** — Do not indent HTML inside template literals. Extra leading spaces render as visual gaps between list items.
