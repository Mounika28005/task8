import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
