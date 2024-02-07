// ! modules
import { Link } from 'react-router-dom';

// styles
import './AboutPage.css';

export default function AboutPage() {
  return (
    <nav className='about-page'>
      <div className='about-page__container'>

          <div className='about-page__developer' >
            <h2 className='text text_color_dark text_size_big' >MAX</h2>
            <Link to={'https://github.com/Logrance'}>GitHub</Link>
            



          </div>

          <div className='about-page__developer' >
          <h2 className='text text_color_dark text_size_big'>Dima</h2>
            <Link to={'https://github.com/chyVacheck'}>GitHub</Link>
          </div>


      </div>
    </nav>
  );
}