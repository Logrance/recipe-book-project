/* eslint-disable react/prop-types */
// ? styles
import './ItemCard.css';

export default function ItemCard({ recipe, handleDelete }) {
  /*
  {
    "id": "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "servings": 1
  },
  */

  // onClick = {deleteRecipe}

  // conditional to check if healthy
  const isHealthy = recipe.calories < 350;

  return (
    <article className='item-card'>
      <div className='item-card__info'>
        <div className='item-card__text'>
          <h2 className='text text_size_small item-card__name'>
            Name: {recipe.name}
          </h2>
          <h3 className='text text_size_small item-card__calories'>
            Calories: {recipe.calories}
          </h3>
          <h2 className='text text_size_small item-card__name'>
            Servings: {recipe.servings}{' '}
          </h2>

          <p
            className={`text item-card__conditional ${
              !isHealthy && 'item-card__conditional_healthy_unhealthy'
            } text_size_small`}
          >
            {isHealthy ? 'Healthy' : 'Unhealthy'}
          </p>
        </div>

        <img
          src={recipe.image}
          alt={`a photo of ${recipe.name}`}
          className='item-card__image'
        />
      </div>

      <button
        className='text button item-card__button'
        onClick={() => {
          handleDelete(recipe.id);
        }}
      >
        Delete
      </button>
    </article>
  );
}