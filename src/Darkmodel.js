
const Darkmodel = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); 
    } else {
      document.documentElement.classList.remove('dark'); 
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dark Mode with Tailwind CSS</h1>
        <p className="mb-8">Toggle between light and dark themes with the button below.</p>
        <button
          onClick={toggleDarkMode}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Darkmodel;
