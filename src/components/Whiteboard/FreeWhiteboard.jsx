import { useState, useEffect, useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Eraser } from 'lucide-react';

/**
 * FreeWhiteboard - Editable whiteboard for users to draw freely
 * Placed as standalone whiteboard section
 */
const FreeWhiteboard = () => {
    const excalidrawRef = useRef(null);
    const [initialData, setInitialData] = useState(null);

    // Load saved whiteboard from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('freeWhiteboard');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setInitialData({
                    elements: parsed.elements || [],
                    appState: parsed.appState || {},
                });
            } catch (error) {
                console.error('Error loading whiteboard:', error);
            }
        }
    }, []);

    // Auto-save whiteboard changes
    const handleChange = (elements, appState) => {
        if (!elements) return;

        const dataToSave = {
            elements,
            appState: {
                viewBackgroundColor: appState?.viewBackgroundColor || '#ffffff',
            },
        };
        localStorage.setItem('freeWhiteboard', JSON.stringify(dataToSave));
    };

    // Clear whiteboard
    const handleClear = () => {
        if (window.confirm('Are you sure you want to clear the whiteboard?')) {
            if (excalidrawRef.current) {
                // Clear all elements from the scene
                excalidrawRef.current.updateScene({
                    elements: [],
                });
            }
            localStorage.removeItem('freeWhiteboard');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                        Free Whiteboard
                    </h3>
                    <p className="text-indigo-100 text-sm">
                        Draw diagrams, take notes, or sketch ideas
                    </p>
                </div>
                <button
                    onClick={handleClear}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-semibold shadow-md"
                >
                    <Eraser className="w-4 h-4" />
                    Clear All
                </button>
            </div>

            {/* Excalidraw Canvas */}
            <div style={{ height: '600px' }}>
                <Excalidraw
                    excalidrawAPI={(api) => (excalidrawRef.current = api)}
                    onChange={handleChange}
                    initialData={initialData}
                />
            </div>

            {/* Info Footer */}
            <div className="bg-gray-50 p-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                    Your drawings are automatically saved in your browser
                </p>
            </div>
        </div>
    );
};

export default FreeWhiteboard;
