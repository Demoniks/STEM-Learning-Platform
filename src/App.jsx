import PythonBasicsGuide from './components/PythonTopics/PythonBasicsGuide';

// Main App component - handles overall layout and title
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Main Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">
            Learning Platform
          </h1>
          <p className="text-gray-600">
            Study Python programming, Math, and Physics with interactive examples<br/>
            Focusing on STEM research
          </p>
        </div>
        {/* Main Content */}
        <PythonBasicsGuide />
      </div>
    </div>
  );
};

export default App;
