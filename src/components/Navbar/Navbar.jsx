
// styles
import './Navbar.css';

// assets
import iconLogo from './../../assets/logo.svg';

export default function Navbar (){
    return (
        <nav className="navbar" >
          <div className='navbar__container' >
            <img className='navbar__logo' src={iconLogo} alt='logo' />
            <h1 className='navbar__title'>Recipe Book</h1>
            </div>
        </nav>
    )
}