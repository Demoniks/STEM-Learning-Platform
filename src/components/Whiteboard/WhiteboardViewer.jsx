import { Excalidraw } from '@excalidraw/excalidraw';
import { useState, useRef } from 'react';
import { RotateCcw } from 'lucide-react';

/**
 * WhiteboardViewer - Editable whiteboard for displaying diagrams
 * Used inside topic concepts to show visual explanations
 * Features:
 * - Displays original author-created diagram
 * - Users can edit/annotate for their own learning
 * - Edits save to localStorage per concept
 * - Reset button restores original diagram
 */
const WhiteboardViewer = ({ whiteboardData, conceptId }) => {
    const excalidrawRef = useRef(null);
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    // If no whiteboard data provided, don't render
    if (!whiteboardData || !whiteboardData.elements || whiteboardData.elements.length === 0) {
        return null;
    }

    // Generate unique localStorage key for this concept
    const storageKey = `whiteboard_${conceptId}`;

    // Load initial data: check localStorage first, fallback to original
    const getInitialData = () => {
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                return {
                    elements: parsed.elements || whiteboardData.elements,
                    appState: parsed.appState || whiteboardData.appState || {},
                };
            }
        } catch (error) {
            console.error('Error loading whiteboard from localStorage:', error);
        }

        // Return original diagram
        return {
            elements: whiteboardData.elements || [],
            appState: whiteboardData.appState || {},
        };
    };

    // Handle changes and auto-save to localStorage
    const handleChange = (elements, appState) => {
        if (elements && appState) {
            try {
                const dataToSave = {
                    elements: elements,
                    appState: {
                        viewBackgroundColor: appState.viewBackgroundColor || '#ffffff'
                    }
                };
                localStorage.setItem(storageKey, JSON.stringify(dataToSave));
            } catch (error) {
                console.error('Error saving whiteboard to localStorage:', error);
            }
        }
    };

    // Reset to original diagram
    const handleReset = () => {
        try {
            // Remove from localStorage
            localStorage.removeItem(storageKey);

            // Update Excalidraw with original data
            if (excalidrawRef.current) {
                excalidrawRef.current.updateScene({
                    elements: whiteboardData.elements,
                    appState: whiteboardData.appState || {}
                });
            }

            setShowResetConfirm(false);
        } catch (error) {
            console.error('Error resetting whiteboard:', error);
        }
    };

    return (
        <div className="mb-4">
            {/* Header with Reset Button */}
            <div className="flex justify-between items-center mb-2 px-2">
                <div className="text-sm text-gray-600">
                    <span className="font-medium">Interactive Diagram</span>
                    <span className="ml-2 text-xs">• Click to edit and annotate</span>
                </div>

                {!showResetConfirm ? (
                    <button
                        onClick={() => setShowResetConfirm(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                        title="Reset to original diagram"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Reset to original?</span>
                        <button
                            onClick={handleReset}
                            className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                        >
                            Yes, Reset
                        </button>
                        <button
                            onClick={() => setShowResetConfirm(false)}
                            className="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>

            {/* Excalidraw Canvas */}
            <div
                className="bg-white rounded-lg border-2 border-indigo-200 overflow-hidden"
                style={{ height: '400px' }}
            >
                <Excalidraw
                    ref={excalidrawRef}
                    initialData={getInitialData()}
                    onChange={handleChange}
                />
            </div>

            {/* Footer Info */}
            <div className="mt-2 text-xs text-gray-500 px-2">
                Your edits are saved automatically and only visible to you.
            </div>
        </div>
    );
};

export default WhiteboardViewer;
