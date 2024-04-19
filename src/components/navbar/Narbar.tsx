import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Narbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Blog</NavLink>
      <NavLink to="/article" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Ajouter un article</NavLink>
    </nav>
  );
};

export default Narbar;
