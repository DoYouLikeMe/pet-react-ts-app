import {useState} from "react";

import {Logo} from "@/components//Logo/Logo";
import {Navigation} from "@/components/Navigation/Navigation";
import {MobileMenu} from "@/components/MobileMenu/MobileMenu";

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Logo />
          <Navigation isMobile={false} />
          <button
            className={
              isMobileMenuActive
                ? "mobile-menu__button mobile-menu__button_active"
                : "mobile-menu__button"
            }
            onClick={toggleMenu}
          >
            Показать мобильное меню меню
          </button>
          <MobileMenu toggleMenu={toggleMenu} isActive={isMobileMenuActive} />
        </div>
      </div>
    </header>
  );
};
