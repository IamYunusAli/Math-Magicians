import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <NavLink className={styles.htitle} to="/">
      Math Magicians
    </NavLink>
    <nav>
      <ul className={styles.nlink}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/Quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
