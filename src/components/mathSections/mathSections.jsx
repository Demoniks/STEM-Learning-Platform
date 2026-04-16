import { Calculator, VectorSquare, TriangleDashed, X, Diameter, LoaderPinwheel, Combine } from "lucide-react";

// Math topics using Python
export const mathSections = {
    basicMath: {
        title: "Complex Numbers",
        icon: <Calculator className="w-5 h-5" />,
        description: `Is a combination of a Real Number and an Imaginary Number - 
        the foundation of advanced math and engineering.`,
        concepts: [
            {
                name: "What is a Complex Number?",
                paragraph: `
                <p>A <strong>complex number</strong> is written in the form <code>a + bi</code>,
                where:</p>
                <ul>
                    <li>
                        <strong>a</strong> is the <em>real part</em> -
                        a normal number on the number line
                    </li>
                    <li>
                        <strong>b</strong> is the <em>imaginary part</em> -
                        a number that involves <code>√-1</code>
                    </li>
                    <li>
                        <strong>i</strong> is the <em>imaginary unit</em>,
                        defined as <code>i = √-1</code>
                    </li>
                </ul>
                <p>Think of complex numbers as a coordinate system - <strong>real</strong> goes left/right, <strong>imaginary</strong> goes up/down.</p>
                `,
                explanation: "Every real number is also a complex number - just with b = 0. Example: 5 is the same as 5 + 0i."
            },

            // New Section for examples
            {
                name: "Real Numbers",
                paragraph: `
                <p>
                    <strong>Real Numbers</strong> are every number you've used before -
                    before, positive, negative, fractions, decimals, roots:
                </p>
                <blockquote>
                    1 &nbsp;|&nbsp; 12.38 &nbsp;|&nbsp; -0.8625 &nbsp;|&nbsp; 3/4 &nbsp;|&nbsp;
                    √2 &nbsp;|&nbsp; 1998
                </blockquote>
                <p>They live on the <em>horizontal axis</em> of the complex  plane.</p>
                `,
            },
            {
                name: "Imaginary Numbers",
                paragraph: `
                <p>
                    So no real number squared gives us a negative result. We <strong>
                    invented</strong> the imaginary unit <code>i</code> to solve this:
                </p>
                <blockquote>
                    <code>i = √-1</code> &nbsp;&nbsp; so &nbsp;&nbsp; <code>i² = -1</code>
                </blockquote>
                <p>
                    Example of imaginary numbers: &nbsp; <strong>3i</strong>, &nbsp;
                    <strong>-2.8i</strong>, &nbsp; <strong>(√2)i</strong>
                </p>
                `,
                explanation: `
                word 'imaginary' is just a name - these numbers are just as real in
                engineering, physics, and signal processing as any other.
                `
            },
            {
                name: "The form: z = a + bi",
                paragraph: `
                <p>
                    We use the letter <strong>z</strong> for a complex  number:
                </p>
                <blockquote><code>z = a + bi</code></blockquote>
                <table>
                    <thead><tr><th>Symbol</th><th>Meaning</th><th>Example (z = 3 + 4i)
                    </th></tr></thead>
                    <tbody>
                        <tr>
                            <td><code>a</code></td><td>Real part → <code>Re(z)</code></td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><code>b</code></td><td>Imaginary part → <code>Im(z)</code>
                            </td><td>4</td>
                        </tr>
                        <tr>
                            <td><code>z*</code></td><td>Conjugate (flip sign of b)</td>
                            <td>3 - 4i</td>
                        </tr>
                </table>
                `,
                explanation: `The conjugate z* = a - bi is used constantly in division
                    and signal processing. It mirrors the number over the real axis.`
            },
            {
                name: `Adding Complex Numbers`,
                paragraph: `
                <p>
                    Add the <strong>real parts together</strong> and the <strong>
                    imaginary parts together</strong> separately:
                </p>
                <blockquote><code>(a + bi) + (c + di) = (a+c) + (b+d)i</code></blockquote>
                `,
                code: `
                # Adding complex numbers in Python
z1 = 3 + 2j #Python uses 'j' instead of 'i'
z2 = 1 + 7j

result = z1 + z2
print(result) #(4+9j)
print(result.real) #4.0 ← real part
print(result.imag) #9.0 ← imaginary part`,
                explanation: `Python uses 'j' for the imaginary unit instead of 'i' -
                both mean exactly the same thing mathematically.`
            },
            {
                name: `Multiplying Complex Numbers`,
                paragraph: `
                <p>
                    Use <strong>FOIL</strong> (First, Outers, Inners, Lasts) -
                    same as multiplyinhg bionomials:
                </p>
                <blockquote>
                    <code>(a + bi)(c + di) = ac + adi + bci + bdi²</code><br/>
                    Since <code>i² = -1</code>: &nbsp; <code>= (ac - bd) + (ad + bc)i
                    </code>
                </blockquote>
                `,
                code: `
                # Multiplying complex numbers in Python
z1 = 3 + 2j
z2 = 1 + 7j

result = z1 * z2
print(result) # (-11+23j)

# Manual check (3)(1) - (2)(7) = -11 ✓
#              (3)(7) + (2)(1) = 23 ✓`,
                explanation: `The key trick: i² = - 1, so the bd term flips sign. Python
                handles this automatically.`
            },
        ]
    },

// New Section {*Vectors*}
    vectors: {
        title: "Vectors",
        icon: <VectorSquare className="w-5 h-5" />,
        description: "A vector is a quantity with both magnitude and direction.",
        concepts: [
            {
                name: "Introduction to Vectors",
                paragraph: `<p>A <strong>vector</strong> is a mathematical object that has both <em>magnitude</em> (length) and <em>direction</em>.</p>
                <p>Vectors are represented as arrows, where the length represents magnitude and the arrow direction represents the vector's direction.</p>`,
                code: `# Vector representation in Python
import numpy as np

# Create a vector
v = np.array([3, 4])
print(f"Vector: {v}")

# Calculate magnitude
magnitude = np.linalg.norm(v)
print(f"Magnitude: {magnitude}")`,
                explanation: "In Python, we use NumPy arrays to represent vectors. The magnitude is calculated using the Euclidean norm.",
                hasInteractiveButton: false,
                whiteboard: null  // Add your Excalidraw diagram here
            },
            {
                name: "Vector Operations",
                code: `# Vector addition and subtraction
import numpy as np

v1 = np.array([2, 3])
v2 = np.array([1, 4])

# Addition
v_sum = v1 + v2
print(f"Sum: {v_sum}")

# Subtraction
v_diff = v1 - v2
print(f"Difference: {v_diff}")`,
                explanation: "Vectors can be added and subtracted component-wise.",
                hasInteractiveButton: false,
                whiteboard: null
            },
            {
                name: "Dot Product",
                paragraph: `<p>The <strong>dot product</strong> (scalar product) of two vectors results in a scalar value.</p>
                <ul>
                    <li>If the dot product is <strong>positive</strong>, vectors point in similar directions</li>
                    <li>If it's <strong>zero</strong>, vectors are perpendicular</li>
                    <li>If it's <strong>negative</strong>, vectors point in opposite directions</li>
                </ul>`,
                code: `import numpy as np

v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])

# Dot product
dot = np.dot(v1, v2)
print(f"Dot product: {dot}")`,
                explanation: null,  // No explanation needed, paragraph covers it
                whiteboard: null
            }
        ]
    },
    matrices: {
        title: "Matrices",
        icon: <TriangleDashed className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
    determinants: {
        title: "Determinants",
        icon: <X className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
    eigenvectors: {
        title: "Eigenvectors",
        icon: <Calculator className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
    differentiation: {
        title: "Differentiation",
        icon: <Diameter className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
    integration: {
        title: "Integration",
        icon: <LoaderPinwheel className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
    partialDerivatives: {
        title: "Partial Derivatives",
        icon: <Combine className="w-5 h-5" />,
        description: ".",
        concepts: [
            {
                name: "",
                code: ``,
                explanation: "."
            }
        ]
    },
};




