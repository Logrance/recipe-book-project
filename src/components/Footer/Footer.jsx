// styles
import './Footer.css';

import iconGit from './../../assets/github-white.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        {/* git rep */}
        <div className='footer__rep'>
          <img src={iconGit} alt='GitHub' className='footer__icon' />

          <a
            className='footer__link link text text_size_small'
            href='https://github.com/Logrance/recipe-book-project'
          >
            GitHub
          </a>
        </div>

        {/* authors */}
        <div className='footer__authors'>
          <h6 className='text text_size_smaller footer__authors-title'>
            create by
          </h6>
          <a
            href='https://github.com/Logrance'
            className='link text text_size_smaller'
          >
            Logrance
          </a>
          <a
            href='https://github.com/chyVacheck'
            className='link text text_size_smaller'
          >
            chyVacheck
          </a>
        </div>
      </div>
    </footer>
  );
}
