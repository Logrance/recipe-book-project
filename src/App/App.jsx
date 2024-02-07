// ! modules
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// ? style
import './App.css';

// ? components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// ? pages
import List from './../Pages/List/List';
import ItemDetails from '../Pages/ItemDetails/ItemDetails';
import NotFound from './../Pages/NotFound/NotFound';
import AboutPage from './../Pages/AboutPage/AboutPage';

// data
import recipesData from './../data/recipeData.json';

function App() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipesData);

  // delete func
  const deleteRecipe = (recipeId) => {
    const newList = recipesToDisplay.filter((elm) => {
      return elm.id !== recipeId;
    });
    setRecipesToDisplay(newList);
  };

  return (
    <section className='app'>
      <Navbar />
      <main className='app__container'>
        <Routes>
          <Route
            path='/'
            element={
              <List
                recipesToDisplay={recipesToDisplay}
                deleteRecipe={deleteRecipe}
              />
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
