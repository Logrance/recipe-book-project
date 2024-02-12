/* eslint-disable react/prop-types */
import { useState } from 'react';

// ? styles
import './AddRecipeForm.css';

export default function AddRecipeForm({ handleSubmit }) {
  //
  const _emptyRecipeData = {
    'recipe-name': '',
    'recipe-amount-calories': '',
    'recipe-image': '',
    'recipe-servings': '',
  };

  //
  const [inputsValue, setInputsValue] = useState(_emptyRecipeData);

  //
  function handleInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setInputsValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    const _newRecipe = {
      name: inputsValue['recipe-name'],
      calories: inputsValue['recipe-amount-calories'],
      image: inputsValue['recipe-image'],
      servings: inputsValue['recipe-servings'],
    };

    handleSubmit(_newRecipe);

    setInputsValue(_emptyRecipeData);
  }

  return (
    <section className='add-recipe-form'>
      <h2 className='text text_color_dark text_size_big '>Create a new recipe:</h2>
      <form onSubmit={onSubmit} className='add-recipe-form__form'>
        <label className='add-recipe-form__input' htmlFor='recipe-name'>
          <h2 className='text text_size_small text_color_accent'>Title</h2>
          <input
            onChange={handleInputChange}
            value={inputsValue['recipe-name']}
            id='recipe-name'
            type='text'
            name='recipe name'
            required
            placeholder='recipe name'
          />
        </label>

        <label className='add-recipe-form__input' htmlFor='recipe-amount-calories'>
          <h2 className='text text_size_small text_color_accent'>Amount of calories</h2>
          <input
            onChange={handleInputChange}
            value={inputsValue['recipe-amount-calories']}
            id='recipe-amount-calories'
            type='number'
            name='amount of calories'
            required
            placeholder='amount of calories'
          />
        </label>

        <label className='add-recipe-form__input' htmlFor='recipe-image'>
          <h2 className='text text_size_small text_color_accent'>Image url</h2>
          <input
            onChange={handleInputChange}
            value={inputsValue['recipe-image']}
            id='recipe-image'
            type='url'
            name='recipe image'
            required
            placeholder='recipe image'
          />
        </label>

        <label className='add-recipe-form__input' htmlFor='recipe-image'>
          <h2 className='text text_size_small text_color_accent'>Servings</h2>
          <input
            onChange={handleInputChange}
            value={inputsValue['recipe-servings']}
            id='recipe-servings'
            type='number'
            name='servings quantity'
            required
            placeholder='servings quantity'
          />
        </label>

        <button className='button text text_size_small text_color_accent' type='submit'>Add new recipe</button>
      </form>
    </section>
  );
}
