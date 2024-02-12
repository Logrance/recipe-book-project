/* eslint-disable react/prop-types */
// ? styles
import './List.css';

// ? components
import ItemCard from './../../components/ItemCard/ItemCard';

export default function List({ recipesToDisplay, favoritesId, deleteRecipe, addToFavorites, removeFromFavorites }) {
  /*
  function handleDelete(recipeId) {
    setRecipesToDisplay(recipesToDisplay.filter((rec) => rec.id !== recipeId));
  }
  */



  return (
    <article className='list'>
      {recipesToDisplay.map((recipe) => {

        const isFavorite = favoritesId.includes(recipe.id);

        return (
          <ItemCard
            key={recipe.id}
            recipe={recipe}
            handleDelete={deleteRecipe}
            isFavorite={isFavorite}
            handleClickFavorite={isFavorite ? removeFromFavorites : addToFavorites}
          />
        );
      })}
    </article>
  );
}
