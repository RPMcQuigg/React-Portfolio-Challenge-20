import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Rutter P. McQuigg</h1>
      <nav>
        <ul>
        <li><NavLink to="/" activeClassName="active">About Me</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
