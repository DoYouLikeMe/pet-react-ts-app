import {useState} from "react";
import {useLocation} from "react-router-dom";
import {Logo} from "@/components//Logo/Logo";
import {Navigation} from "@/components/Navigation/Navigation";
import {MobileMenu} from "@/components/MobileMenu/MobileMenu";
import {NotOnly} from "@/components/Not-only/NotOnly";

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <header className={isMainPage ? "header" : "header header_secondary"}>
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
        {isMainPage ? <NotOnly /> : null}
      </div>
    </header>
  );
};
