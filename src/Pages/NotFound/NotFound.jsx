// ! modules
import { NavLink } from 'react-router-dom';

// styles
import './NotFound.css';


export default function NotFound() {
  return (
    <article className='not-found'>
      <h1 className='text text_size_big text_color_dark' >Not found page</h1>
      <NavLink className='link' to={'/'} >Go to main</NavLink>
    </article>

  );
}
