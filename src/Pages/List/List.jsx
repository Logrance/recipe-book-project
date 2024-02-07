// ? styles
import './List.css';

// ? components
import ItemCard from './../../components/ItemCard/ItemCard';

export default function List({ recipesToDisplay, deleteRecipe  }) {

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
