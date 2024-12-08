

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'your_spoonacular_api_key';
  const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(API_URL);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-semibold my-4">{recipe.title}</h2>
        <h3 className="text-xl font-semibold text-gray-700">Ingredients</h3>
        <ul className="list-disc pl-5">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Instructions</h3>
        <p>{recipe.instructions}</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Nutrition Information</h3>
        <ul>
          {recipe.nutrition.nutrients.map((nutrient) => (
            <li key={nutrient.title}>
              <strong>{nutrient.title}:</strong> {nutrient.amount} {nutrient.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
