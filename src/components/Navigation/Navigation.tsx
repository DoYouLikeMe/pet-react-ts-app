import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation navigation_main">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/">
            About the shelter
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/our-pets">
            Our Pets
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/help">
            Help the shelter
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
