import {Navigation} from "../Navigation/Navigation";

interface MobileMenuProps {
  isActive: boolean;
  toggleMenu: React.MouseEventHandler<HTMLDivElement>;
}

export const MobileMenu = (props: MobileMenuProps) => {
  const {isActive, toggleMenu} = props;
  return (
    <div
      onClick={toggleMenu}
      className={isActive ? "mobile-menu mobile-menu_active" : "mobile-menu"}
    >
      <Navigation isMobile={true} />
    </div>
  );
};
