import React, { useState } from 'react';
import { Play, Code, Calculator } from 'lucide-react';
import CodeEditor from '../CodeEditor/CodeEditor';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import WhiteboardViewer from '../Whiteboard/WhiteboardViewer';
import FreeWhiteboard from '../Whiteboard/FreeWhiteboard';
import { pythonSections } from './pythonSections';
import { mathSections } from '../mathSections/mathSections';
import { physicSections } from '../PhysicSections/physicSections';

const PythonBasicsGuide = () => {
  // Categories structure
  const categories = {
    python: {
      name: 'Python Basics',
      icon: <Code className='w-5 h-5' />,
      sections: pythonSections
    },
    mathSections: {
      name: 'Mathematics',
      icon: <Calculator className='w-5 h-5' />,
      sections: mathSections
    },
    physicSections: {
      name: 'Physics',
      icon: <Calculator className='w-5 h-5' />,
      sections: physicSections
    }
  };

  const [activeCategory, setActiveCategory] = useState('python');
  const [activeSection, setActiveSection] = useState('variables');
  const [outputs, setOutputs] = useState({});
  const [viewMode, setViewMode] = useState('learn');

  // Handle category change and automatically select first section
  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    // Get the first section of the new category
    const firstSectionKey = Object.keys(categories[newCategory].sections)[0];
    setActiveSection(firstSectionKey);
  };

  // Get current section from active category
  const currentSection = categories[activeCategory].sections[activeSection];

  const runCode = (code, key) => {
    setOutputs(prev => ({ ...prev, [key]: `Output: ${code}` }));
  };

  // Render content based on view mode
  const renderContent = () => {
    if (viewMode === 'learn') {
      return (
        <>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <div className='flex items-start gap-4 mb-4'>
              <div className='p-3 bg-indigo-100 rounded-lg'>
                {currentSection.icon}
              </div>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>
                  {currentSection.title}
                </h2>
                <p className='text-gray-600 mt-1'>{currentSection.description}</p>
              </div>
            </div>
          </div>

          {currentSection.concepts.map((concept, idx) => (
            <div key={idx} className='bg-white rounded-lg shadow-lg p-6'>
              {/* Name (optional) */}
              {concept.name && (
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {concept.name}
                </h3>
              )}

              {/* Paragraph with HTML support (optional) */}
              {concept.paragraph && (
                <div
                  className='mb-4 text-gray-700
                    [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:my-1
                    [&_li]:my-0 [&_li]:leading-tight
                    [&_p]:my-1
                    [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm
                    [&_th]:text-left [&_th]:border-b [&_th]:border-gray-300 [&_th]:pb-1 [&_th]:pr-4 [&_th]:font-semibold
                    [&_td]:py-1 [&_td]:pr-4 [&_td]:border-b [&_td]:border-gray-100
                    [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400 [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:my-2
                    [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded'
                  dangerouslySetInnerHTML={{ __html: concept.paragraph }}
                />
              )}

              {/* Code block (optional) */}
              {concept.code && (
                <div className='bg-gray-900 rounded-lg p-4 mb-4'>
                  <pre className='text-green-400 font-mono text-sm overflow-x-auto'>
                    {concept.code}
                  </pre>
                </div>
              )}

              {/* Explanation (optional) */}
              {concept.explanation && (
                <div className='bg-blue-50 border-l-4 border-blue-500 p-4 mb-4'>
                  <p className='text-gray-700'> {concept.explanation} </p>
                </div>
              )}

              {/* Whiteboard (optional) */}
              {concept.whiteboard && (
                <WhiteboardViewer
                  whiteboardData={concept.whiteboard}
                  conceptId={`${activeSection}-${idx}`}
                />
              )}

              {/* Interactive Button (only show if hasInteractiveButton is true) */}
              {concept.hasInteractiveButton && (
                <button
                  onClick={() => runCode(concept.code, `${activeSection}-${idx}`)}
                  className='flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        bg-green-600
                        text-white
                        rounded-lg
                        hover:bg-green-700
                        transition'
                >
                  <Play className='w-4 h-4' />
                  Copy this code
                </button>
              )}

              {outputs[`${activeSection}-${idx}`] && (
                <div className='mt-4 bg-gray-900 rounded-lg p-4'>
                  <p className='text-green-400 font-mono text-sm'>
                    {outputs[`${activeSection}-${idx}`]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </>
      );
    } else if (viewMode === 'editor') {
      return <CodeEditor />;
    } else {
      return <FreeWhiteboard />;
    }
  };

  return (
    <div className='grid lg:grid-cols-4 gap-6'>
      {/* Sidebar Navigation */}
      <div className='lg:col-span-1'>
        <div className='bg-white rounded-lg shadow-lg p-6 sticky top-6'>
          <h2 className='text-lg font-semibold mb-4 text-gray-800'> Navigation </h2>
          <NavigationMenu
            viewMode={viewMode}
            setViewMode={setViewMode}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            categories={categories}
          />
        </div>
      </div>

      {/* Content */}
      <div className='lg:col-span-3 space-y-6'>
        {renderContent()}
      </div>
    </div>
  );
};

export default PythonBasicsGuide;
