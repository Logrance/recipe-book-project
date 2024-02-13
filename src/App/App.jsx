// ! modules
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// ? style
import './App.css';

// ? components
import Navbar from '../components/Navbar/Navbar';
import AddRecipeForm from '../components/AddRecipeForm/AddRecipeForm';
import Footer from '../components/Footer/Footer';

// ? pages
import List from './../Pages/List/List';
import ItemDetails from '../Pages/ItemDetails/ItemDetails';
import NotFound from './../Pages/NotFound/NotFound';
import AboutPage from './../Pages/AboutPage/AboutPage';

// data
import recipesData from './../data/recipeData.json';

function App() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(
    sortByName(recipesData),
  );
  const [favoritesRecipesToDisplay, setFavoritesRecipesToDisplay] = useState(
    [],
  );
  const [maxId, setMaxId] = useState(0);

  // delete func
  const deleteRecipe = (recipeId) => {
    const _filterFunc = (elm) => elm.id !== recipeId;
    const newList = recipesToDisplay.filter(_filterFunc);
    const newFavoritesList = favoritesRecipesToDisplay.filter(_filterFunc);

    setRecipesToDisplay(newList);
    setFavoritesRecipesToDisplay(newFavoritesList);
  };

  function addToFavorites(recipeId) {
    let newRecipe = {};

    for (let i = 0; i < recipesToDisplay.length; i++) {
      const recipe = recipesToDisplay[i];

      if (recipe.id === recipeId) {
        newRecipe = recipe;
        break;
      }
    }

    setFavoritesRecipesToDisplay([newRecipe, ...favoritesRecipesToDisplay]);
  }

  function removeFromFavorites(recipeId) {
    const newList = favoritesRecipesToDisplay.filter(
      (elm) => elm.id !== recipeId,
    );
    setFavoritesRecipesToDisplay(newList);
  }

  // add a new one recipe
  function addNewRecipe(newRecipe) {
    newRecipe.id = maxId;
    setMaxId(maxId + 1);
    setRecipesToDisplay([newRecipe, ...recipesToDisplay]);
  }

  // sort data by name
  function sortByName(data) {
    return data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  // change rating
  function updateRating(recipeId, newRating) {
    const _updateFunc = (recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, rating: newRating };
      }
      return recipe;
    };
    const newList = recipesToDisplay.map(_updateFunc);
    const newFavoritesList = favoritesRecipesToDisplay.map(_updateFunc);

    setRecipesToDisplay(newList);
    setFavoritesRecipesToDisplay(newFavoritesList);
  }

  useEffect(() => {
    const newList = recipesToDisplay.map((elm) => {
      elm.rating = 0;
      return elm;
    });
    setRecipesToDisplay(newList);
  }, []);

  return (
    <section className='app'>
      <Navbar />
      <main className='app__container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <AddRecipeForm handleSubmit={addNewRecipe} />
                <List
                  updateRating={updateRating}
                  addToFavorites={addToFavorites}
                  favoritesId={favoritesRecipesToDisplay.map((item) => item.id)}
                  removeFromFavorites={removeFromFavorites}
                  recipesToDisplay={recipesToDisplay}
                  deleteRecipe={deleteRecipe}
                />
              </>
            }
          />

          <Route
            path='/favorites'
            element={
              <>
                <List
                  updateRating={updateRating}
                  addToFavorites={addToFavorites}
                  favoritesId={favoritesRecipesToDisplay.map((item) => item.id)}
                  removeFromFavorites={removeFromFavorites}
                  recipesToDisplay={favoritesRecipesToDisplay}
                  deleteRecipe={deleteRecipe}
                />
              </>
            }
          />

          <Route
            path='/recipeDetails/:recipeId'
            element={
              <ItemDetails
                allRecipes={recipesToDisplay}
                deleteRecipe={deleteRecipe}
              />
            }
          />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer></Footer>
    </section>
  );
}

export default App;
