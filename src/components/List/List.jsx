// ? styles
import './List.css';
import { useState } from 'react';

import recipesData from './../../data/recipeData.json';

// ? components
import ItemCard from '../ItemCard/ItemCard';

export default function List() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipesData);

  // delete func
  const deleteRecipe = (recipeId) => {
    const newList = recipesToDisplay.filter((elm) => {
      return elm.id !== recipeId;
    });
    setRecipesToDisplay(newList);
  };

  /*
  function handleDelete(recipeId) {
    setRecipesToDisplay(recipesToDisplay.filter((rec) => rec.id !== recipeId));
  }
  */

  return (
    <article className='list'>
      {recipesToDisplay.map((recipe) => {
        return (
          <ItemCard
            key={recipe.id}
            recipe={recipe}
            handleDelete={deleteRecipe}
          />
        );
      })}
    </article>
  );
}
