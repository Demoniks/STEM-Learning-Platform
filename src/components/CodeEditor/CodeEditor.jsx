import React, { useState, useEffect } from 'react';
// useState: Lets us remember things (like the code being edited)
// useEffect: Let us do things when component loads (like loading Python)

import { Play, RotateCcw, Loader } from 'lucide-react';
// Icons: Play button, Reset button, Loading spinner

import { EXAMPLE_CODES } from './exampleCodes';

const CodeEditor = () => {
    // ==== STATE (component memory) ====
    // The code the user types in the editor
    const [code, setCode] = useState('# Write your Python code here\nprint("hi, mundo!")');

    // the output after running code
    const [output, setOutput] = useState('');

    // is python currently running?
    const [isRunning, setIsRunning] = useState(false);

    // is Python still loading?
    const [pyodideLoading, setPyodideLoading] = useState(true);

    // The Python interpreter object (null until loaded)
    const [pyodide, setPyodide] = useState(null);

    // == Load Python ==

    // useEffect runs AFTER the component first appears on screen
    useEffect(() => {
        // this is an async function (can use 'await')
        const loadPyodide = async () => {
            try {
                // Load the Python interpreter
                const pyodideInstance = await window.loadPyodide({
                    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
                });

                // save it in state so we can use it later
                setPyodide(pyodideInstance);
                setPyodideLoading(false);
                setOutput('✅ Python ready! Write your code and click Run.');
            } catch (error) {
                setOutput(`❌ Error loading Python: ${error.message}`);
                setPyodideLoading(false);
            }
        };

        loadPyodide();
    }, []); // [] means "only run this once when component mounts"

    // === Run Code ===
    const runCode = async () => {
        // Don't run if Python isn't loaded yet
        if (!pyodide) {
            setOutput('⏳ Python is still loading...');
            return;
        }

        // set running state to show spinner
        setIsRunning(true);
        setOutput('');

        try {
            // Capture console output
            let outputText = '';

            // capture python stdout
            pyodide.runPython(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
                `);

            // Run the user code
            await pyodide.runPythonAsync(code);

            outputText = pyodide.runPython("sys.stdout.getvalue()");

            // Show the output
            setOutput(outputText || 'Code executed  successfully (no output)');
        } catch (error) {
            // if there's an error, show it
            setOutput(`❌ Error:\n${error.message}`);
        } finally {
            // Always turn off the spinner when done
            setIsRunning(false);
        }
    };

    // === Reset Code ===

    const resetCode = () => {
        setCode('# Write your Python code here\nprint("Hello, World!")');
        setOutput('');
    };

    // === Render UI ===

    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-3xl font-bold text-indigo-900 mb-2">
                    🐍 Live Editor
                </h2>
                <p className="text-gray-600">
                    Write and Run Python code directly in your browser!
                </p>
            </div>

            {/* Editor Container */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Code Editor */}
                <div className="bg-gray-900 p-4">
                    <div className="text-gray-400 text-sm mb-2 font-mono">
                        editor.py
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="
                        w-full
                        h-64
                        bg-gray-800
                        text-green-400
                        font-mono
                        text-sm
                        p-4
                        rounded
                        border-2
                        border-gray-700
                        focus:border-indigo-500
                        focus:outline-none
                        resize-y"
                        placeholder="Write your Python code here..."
                        disabled={pyodideLoading}
                    />
                </div>

                {/* Button Controls */}
                <div className="bg-gray-100 p-4 flex gap-3 border-t border-gray-300">
                    <button
                        onClick={runCode}
                        disabled={pyodideLoading || isRunning}
                        className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    bg-green-600
                    text-white
                    rounded-lg
                    hover:bg-green-700
                    disabled:bg-gray-400
                    disabled:cursor-not-allowed
                    transition
                    font-semibold"
                    >
                        {isRunning ? (
                            <>
                                <Loader className="w-5 h-5 animate-spin" />
                                Running...
                            </>
                        ) : (
                            <>
                                <Play className="w-5 h-5" />
                                Run Code
                            </>
                        )}
                    </button>

                    <button
                        onClick={resetCode}
                        disabled={pyodideLoading}
                        className="
                    flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    bg-gray-600
                    text-white
                    rounded-lg
                    hover:bg-gray-700
                    disabled:bg-gray-400
                    disabled:cursor-not-allowed
                    transition
                    font-semibold"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Reset
                    </button>
                </div>

                {/* Output Display */}
                {output && (
                    <div className="bg-gray-900 p-4 border-t-2 border-gray-700">
                        <div className="text-gray-400 text-sm mb-2 font-mono">
                            Output:
                        </div>
                        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                            {output}
                        </pre>
                    </div>
                )}
            </div>

            {/* Example code snippets */}
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Try these examples:
                </h3>
                {/* A function that accepts up to three arguments.
            The map method calls the callbackfn function one
            time for each element in the array.
            Calls a defined callback function on each element
            of an array, and returns an array that contains the results. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EXAMPLE_CODES.map((example) => (
                        <button
                            key={example.title}
                            onClick={() => setCode(example.code)}
                            className="
                        text-left
                        p-4
                        bg-indigo-50
                        rounded-lg
                        hover:bg-indigo-100
                        transition
                        border-2
                        border-transparent
                        hover:border-indigo-300
                        "
                        >
                            <div className="font-semibold text-indigo-900 mb-1">
                                {example.title}
                            </div>
                            <div className="text-sm text-gray-600">
                                {example.description}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
