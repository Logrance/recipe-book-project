// ! modules
import { Link } from 'react-router-dom';

// styles
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className='about-page'>
      <div className='about-page__developer'>
        <div className='about-page__developer-info'>
          <img
            className='about-page__developer-avatar'
            src='	https://avatars.githubusercontent.com/u/145765580'
            alt='GitHub avatar'
          />

          <div>
            <h2 className='text text_color_dark text_size_big'>Max</h2>
            <p className='text text_color_dark'>XXX years</p>
          </div>
        </div>

        <p className='text text_weight_thin about-page__developer-about'>
          Just a bit information about developer, what he likes and etc
        </p>

        <div className='about-page__developer-links'>
          <Link
            target='_blank'
            className='text text_size_small link'
            to={'https://github.com/Logrance'}
          >
            GitHub
          </Link>

          <Link
            target='_blank'
            className='text text_size_small link'
            to={'https://www.linkedin.com/in/Logrance'}
          >
            Linkedin
          </Link>
        </div>
      </div>

      <div className='about-page__developer'>
        <div className='about-page__developer-info'>
          <img
            className='about-page__developer-avatar'
            src='https://avatars.githubusercontent.com/u/76044670'
            alt='GitHub avatar'
          />

          <div>
            <h2
              className='text text_color_dark text_size_big'
              title='Full name is Dmytro'
            >
              Dima
            </h2>
            <p
              className='text text_color_dark'
              title='I was born in December of 2002'
            >
              21 years
            </p>
          </div>
        </div>

        <p className='text text_weight_thin about-page__developer-about'>
          I started programming back in late high school and I really enjoyed
          it, also I love to doodle with pencil. I was born in Kiev, the capital
          of Ukraine
        </p>

        <div className='about-page__developer-links'>
          <Link
            target='_blank'
            className='text text_size_small link'
            to={'https://github.com/chyVacheck'}
          >
            GitHub
          </Link>

          <Link
            target='_blank'
            className='text text_size_small link'
            to={'https://www.linkedin.com/in/dmytro-shakh/'}
          >
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
}
