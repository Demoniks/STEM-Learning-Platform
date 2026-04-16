import React from 'react';
import { BookOpen, Code, PenTool } from 'lucide-react';

const NavigationMenu = ({
    viewMode,
    setViewMode,
    activeCategory,
    setActiveCategory,
    activeSection,
    setActiveSection,
    categories
}) => {
    return (
        <nav className="space-y-2">
            { /* View Mode Selector */}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Mode
                </h3>
                <button
                    onClick={() => setViewMode('learn')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all mb-2 ${viewMode === 'learn'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-medium"> Learn Topics </span>
                </button>
                <button
                    onClick={() => setViewMode('editor')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all mb-2 ${viewMode === 'editor'
                            ? 'bg-green-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <Code className="w-5 h-5" />
                    <span className="text-sm font-medium"> Code Editor </span>
                </button>
                <button
                    onClick={() => setViewMode('whiteboard')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all ${viewMode === 'whiteboard'
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <PenTool className="w-5 h-5" />
                    <span className="text-sm font-medium"> Whiteboard </span>
                </button>
            </div>

            {/* Category and Topic Navigation - Only show when in Learn Mode */}
            {viewMode === 'learn' && (
                <div>
                    {/* Category Selection */}
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                        Categories
                    </h3>
                    <div className="mb-4 space-y-2">
                        {Object.entries(categories).map(([categoryKey, category]) => (
                            <button
                                key={categoryKey}
                                onClick={() => setActiveCategory(categoryKey)}
                                className={`w-full flex items-center gap-3 px-4 py-3
                                        rounded-lg
                                        transition-all ${activeCategory === categoryKey
                                        ? 'bg-purple-600 text-white shadow-md'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {category.icon}
                                <span className="text-sm font-medium">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Topic selection within category */}
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                        Topics List
                    </h3>
                    <div className='space-y-2'>
                        {Object.entries(categories[activeCategory].sections)
                        .map(([key, section]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`w-full flex items-center gap-3 px-4 py-3
                                        rounded-lg
                                        transition-all ${activeSection === key
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {section.icon}
                                <span className="text-sm font-medium">
                                    {section.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationMenu;
