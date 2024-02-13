// ! modules
import { NavLink } from 'react-router-dom';
import heart from './../../assets/heart.png';
import emptyHeart from './../../assets/emptyheart.png';

/* eslint-disable react/prop-types */
// ? styles
import './ItemCard.css';

// ? assets
import iconStarEmpty from './../../assets/star_empty.svg';
import iconStarFull from './../../assets/star_full.svg';

export default function ItemCard({
  isNeedDisplayInfo = false,
  updateRating,
  recipe,
  isFavorite,
  handleDelete,
  handleClickFavorite,
}) {
  // conditional to check if healthy
  const isHealthy = recipe.calories < 350;

  function _rating() {
    const elements = Array.from({ length: 5 }, (v, i) => (
      <button
        key={i}
        onClick={() => {
          updateRating(recipe.id, i + 1);
        }}
        className='button item-card__rating-button'
      >
        <img
          className='item-card__rating-icon'
          src={recipe.rating >= i + 1 ? iconStarFull : iconStarEmpty}
          alt={`grade in ${i + 1} star`}
        />
      </button>
    ));

    return <>{elements}</>;
  }

  return (
    <article className='item-card'>
      <div className='item-card__info'>
        <div className='item-card__text'>
          <div className='item-card__button-and-name'>
            <button
              onClick={() => {
                handleClickFavorite(recipe.id);
              }}
              className='button item-card__button-favorite'
            >
              {isFavorite ? <img src={heart} /> : <img src={emptyHeart} />}
            </button>
            <h2 className='text text_size_small item-card__name'>
              Name: {recipe.name}
            </h2>
          </div>

          {isNeedDisplayInfo && (
            <>
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
            </>
          )}
        </div>

        <div>
          <img
            src={recipe.image}
            alt={`a photo of ${recipe.name}`}
            className='item-card__image'
          />
          <div className='item-card__rating'>
            {_rating()}
            {/* <img
              className='item-card__rating-icon'
              src={iconStarEmpty}
              alt={''}
            /> */}
          </div>
        </div>
      </div>

      {!isNeedDisplayInfo && (
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
