// ! modules
import { useParams } from 'react-router-dom';

/* eslint-disable react/prop-types */

import ItemCard from './../../components/ItemCard/ItemCard';
import NotFound from '../NotFound/NotFound';

export default function ItemDetails({ allRecipes, deleteRecipe }) {
  const { recipeId } = useParams();

  const recipeDetails = allRecipes.find((element) => {
    return element.id == recipeId;
  });

  return recipeDetails ? (
    <ItemCard
      recipe={recipeDetails}
      handleDelete={deleteRecipe}
      isNeedDisplayIno={true}
    />
  ) : (
    <NotFound>We have no this recipe</NotFound>
  );
}
