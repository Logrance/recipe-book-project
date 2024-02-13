/* eslint-disable react/no-unescaped-entities */
// ! modules
import { useParams } from 'react-router-dom';

/* eslint-disable react/prop-types */

import ItemCard from './../../components/ItemCard/ItemCard';
import NotFound from '../NotFound/NotFound';

export default function ItemDetails({
  favoritesId,
  updateRating,
  removeFromFavorites,
  addToFavorites,
  allRecipes,
  deleteRecipe,
}) {
  const { recipeId } = useParams();

  const recipeDetails = allRecipes.find((element) => {
    return element.id == recipeId;
  });

  const isFavorite = favoritesId.includes(recipeDetails.id);

  return recipeDetails ? (
    <ItemCard
      recipe={recipeDetails}
      updateRating={updateRating}
      handleDelete={deleteRecipe}
      isFavorite={isFavorite}
      handleClickFavorite={isFavorite ? removeFromFavorites : addToFavorites}
      isNeedDisplayInfo
    />
  ) : (
    <NotFound>We don't have this recipe</NotFound>
  );
}
