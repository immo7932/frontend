import React, { useState, useEffect } from 'react';

const App = () => {
  const [scale, setScale] = useState(1);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div 
        className="transition-transform duration-300 ease-in-out origin-top-center h-screen flex flex-col"
        style={{ transform: `scale(${scale})` }}
      >
        {}
        <nav className={`w-full z-50 ${
          isDark ? 'bg-slate-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
        } shadow-lg transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-white tracking-wide">Dashboard</h1>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg ${
                  isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                } transition-all duration-300 text-white font-medium backdrop-blur-sm`}
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </nav>

        {}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Menu */}
          <aside 
            className={`h-full transition-all duration-300 ${
              isDark ? 'bg-slate-800' : 'bg-gradient-to-b from-purple-600 to-indigo-600'
            } shadow-lg ${
              menuCollapsed ? 'w-16' : 'w-64'
            }`}
          >
            <button
              onClick={toggleMenu}
              className={`w-full p-4 text-left hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-white font-medium`}
            >
              {menuCollapsed ? '≡' : '← Collapse'}
            </button>
            <ul className="p-2">
              {['Dashboard', 'Profile', 'Settings', 'Help'].map((item, index) => (
                <li 
                  key={index}
                  className={`p-3 mb-2 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-white font-medium ${
                    menuCollapsed ? 'text-center' : ''
                  }`}
                >
                  {menuCollapsed ? item[0] : item}
                </li>
              ))}
            </ul>
          </aside>

          {}
          <main className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
            menuCollapsed ? 'ml-16' : 'ml-64'
          } mr-64`}>
            <div className={`rounded-xl shadow-xl p-6 ${
              isDark ? 'bg-slate-800 bg-opacity-50' : 'bg-white bg-opacity-70'
            } backdrop-blur-md`}>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Welcome Back</h2>
              <p className="mb-6 text-lg">This is your personalized dashboard. Here you can manage all your activities and monitor your progress.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className={`p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-700 hover:bg-slate-600' 
                        : item % 2 === 0 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                          : 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
                    }`}
                  >
                    <h3 className="font-bold text-xl mb-3">Card {item}</h3>
                    <p className="opacity-90">Interactive content for card {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {}
          <aside className={`w-64 transition-colors duration-300 ${
            isDark ? 'bg-slate-800' : 'bg-gradient-to-b from-blue-600 to-indigo-600'
          } shadow-lg p-6`}>
            <h3 className="text-xl font-bold mb-6 text-white">Notifications</h3>
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className={`p-4 rounded-lg mb-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-slate-700' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
              >
                <p className="text-white">Notification {item}</p>
              </div>
            ))}
          </aside>
        </div>

        {}
        <footer className={`w-full ${
          isDark ? 'bg-slate-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
        } shadow-lg transition-colors duration-300 py-4`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-white">© 2025 Dashboard. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;