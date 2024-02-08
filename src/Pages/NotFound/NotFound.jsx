/* eslint-disable react/prop-types */
// ! modules
import { NavLink } from 'react-router-dom';

// styles
import './NotFound.css';

export default function NotFound({ children = 'Page not Found' }) {
  return (
    <article className='not-found'>
      <h1 className='text text_size_big text_color_dark'>{children}</h1>
      <NavLink className='link text' to='/'>
        Go to main
      </NavLink>
    </article>
  );
}
