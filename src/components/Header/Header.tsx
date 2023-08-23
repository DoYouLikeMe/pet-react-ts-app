import {Logo} from "@/components//Logo/Logo";
import {Navigation} from "@/components/Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
