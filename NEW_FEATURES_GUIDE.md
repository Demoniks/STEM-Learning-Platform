# New Features Guide

Covers blog-style content, HTML paragraph rendering, table support, and whiteboard integration added to the platform.

---

## Blog-Style Paragraphs (`paragraph` field)

Each concept now supports a `paragraph` field that renders rich HTML inside the concept card. This replaces plain `code` blocks used as display text.

### What it renders

The `paragraph` field is rendered inside a `<div>` with Tailwind arbitrary variant classes that style:

- `<ul>` / `<ol>` / `<li>` — bullet and numbered lists
- `<strong>` — bold text
- `<em>` — italic text
- `<code>` — inline code with gray background
- `<blockquote>` — indigo left-border quote block
- `<table>` / `<thead>` / `<tbody>` / `<th>` / `<td>` — styled data tables
- `<p>` — paragraphs with controlled spacing

### Usage

```javascript
{
    name: "What is a Complex Number?",
    paragraph: `<p>A <strong>complex number</strong> is written as <code>a + bi</code>, where:</p>
<ul>
<li><strong>a</strong> — real part</li>
<li><strong>b</strong> — imaginary part</li>
<li><strong>i</strong> — imaginary unit, defined as <code>i = √-1</code></li>
</ul>`
}
```

### Important: HTML indentation

Do not indent HTML tags inside template literals. Leading whitespace causes visible spacing gaps between list items in the browser.

```javascript
// Correct — tags flush to left
paragraph: `<ul>
<li>Item one</li>
<li>Item two</li>
</ul>`

// Incorrect — causes extra spacing gaps
paragraph: `
    <ul>
        <li>Item one</li>
        <li>Item two</li>
    </ul>
    `
```

---

## Tables

Use standard HTML table markup inside `paragraph`:

```javascript
paragraph: `<table>
<thead><tr><th>Symbol</th><th>Meaning</th><th>Example (z = 3 + 4i)</th></tr></thead>
<tbody>
<tr><td><code>a</code></td><td>Real part → Re(z)</td><td>3</td></tr>
<tr><td><code>b</code></td><td>Imaginary part → Im(z)</td><td>4</td></tr>
<tr><td><code>z*</code></td><td>Conjugate</td><td>3 − 4i</td></tr>
</tbody>
</table>`
```

Tables render with a bottom border on headers, row dividers, and proper column spacing.

---

## Whiteboard Integration

Two whiteboard components are available:

### WhiteboardViewer (read-only, per concept)

Embedded inside a concept card. Only renders when the concept has a `whiteboard` field with data.

```javascript
{
    name: "Complex Plane",
    whiteboard: {
        elements: [ /* Excalidraw elements array */ ],
        appState: { viewBackgroundColor: "#ffffff" }
    }
}
```

### FreeWhiteboard (editable, Editor mode)

A full Excalidraw canvas available in the Whiteboard tab. Student drawings auto-save to `localStorage` under the key `freeWhiteboard`.

---

## `hasInteractiveButton`

Controls whether a "Copy this code" button appears on a concept card.

- `true` — button is shown
- `false` or omitted — button is hidden

Use `true` for executable examples students should try. Omit it for display-only code blocks (syntax references, pseudocode, styled output).

---

## `explanation` Callout

A plain-text note rendered in a blue left-border box below the code block.

```javascript
{ explanation: "Python uses 'j' for the imaginary unit instead of 'i'." }
```

---

## Renderer Location

All field rendering logic is in `src/components/PythonTopics/PythonBasicsGuide.jsx` inside the `concepts.map()` block. The order of rendering is:

1. `name`
2. `paragraph`
3. `code`
4. `explanation`
5. `whiteboard`
6. `hasInteractiveButton` button
