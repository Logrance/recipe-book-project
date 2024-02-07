// ! modules
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
// ? styles
import './ItemCard.css';

export default function ItemCard({
  recipe,
  handleDelete,
  isLinkVisible = true,
}) {
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
            Servings: {recipe.servings}
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

      {isLinkVisible && (
        <NavLink
          className={'text link item-card__link'}
          to={`/recipeDetails/${recipe.id}`}
        >
          Go to recipe
        </NavLink>
      )}

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
