import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './Project.css'; 

const API_KEY = 'YOUR_SPOONACULAR_API_KEY'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="border p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">
        Search
      </button>
    </div>
  );
};

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

const RecipeCard = ({ recipe }) => (
  <div className="border p-4">
    <h2 className="font-bold">{recipe.title}</h2>
    <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p> {/* To render HTML content */}
    <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
      View Details
    </Link>
  </div>
);

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="my-4" />
      <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p> {/* To render HTML content */}
      <ul>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

const Project = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:id" component={RecipeDetail} />
      </Switch>
    </Router>
  );
};

export default Project;
