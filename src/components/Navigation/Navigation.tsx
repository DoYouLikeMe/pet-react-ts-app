import {NavLink} from "react-router-dom";

interface NavigationInterface {
  isMobile: boolean;
  isSecondary?: boolean;
}

export const Navigation = (props: NavigationInterface) => {
  const {isMobile, isSecondary} = props;

  return (
    <nav
      className={`navigation 
      ${isMobile ? "navigation_mobile" : "navigation_main"} 
      ${isSecondary ? "navigation_secondary" : ""}`}
    >
      <ul
        className={
          isMobile
            ? "navigation__list navigation__list_mobile"
            : "navigation__list "
        }
      >
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
