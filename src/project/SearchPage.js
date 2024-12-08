
const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'your_spoonacular_api_key'; 
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`;

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}${query}`);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Recipe Finder</h1>
        <input
          type="text"
          className="mt-4 p-2 w-2/3 rounded-md border border-gray-300"
          placeholder="Enter ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{recipe.title}</h2>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
