
// styles
import './Footer.css';

import iconGit from './../../assets/github-mark.png';

export default function Footer () {
    return (
        <footer className='footer'>
          <div className='footer__container' >

            <div className='footer_rep' >
              <img src={iconGit} alt='git' className='footer__icon' />
              {/* // todo add rep link  */}
              <a className='footer__link' href='link for rep' >GitHub Rep</a>
            </div>
          </div>
        </footer>
    )
}