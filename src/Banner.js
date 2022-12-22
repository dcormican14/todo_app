import logo from './img/honeycomb.png';
import './css/Banner.css';

function Header() {
  return (
    <div className="Banner">
      <header className="Banner-header">
        <img src={logo} className="Banner-logo" alt='logo'></img>
        <h1 className="Title-text">HONEY  TODO</h1>
      </header>
    </div>
  );
}

export default Header;
