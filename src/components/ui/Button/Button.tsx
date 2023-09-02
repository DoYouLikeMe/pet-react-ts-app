import {useSwiper} from "swiper/react";
import {Link} from "react-router-dom";
interface ButtonProps {
  content?: string | number | React.ReactNode;
  isRound?: Boolean;
  isDisabled?: Boolean;
  isActive?: Boolean;
  isPrime?: Boolean;
  slideNext?: Boolean;
  slidePrev?: Boolean;
  isLink?: Boolean;
  linkNavigation?: string;
  onClickFunction?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}

export const Button = (props: ButtonProps) => {
  const swiper = useSwiper();
  const slideNextSlide = () => swiper.slideNext();
  const slidePrevSlide = () => swiper.slidePrev();
  const {
    isLink,
    linkNavigation = "/home",
    content,
    slideNext,
    slidePrev,
    isRound,
    isDisabled,
    isActive,
    isPrime,
    onClickFunction,
  } = props;

  const styles = `${"button"}
  ${isPrime ? "button_prime" : ""}
  ${isRound ? "button_round" : ""}
  ${isActive ? "button_active" : ""}
  ${isDisabled ? "button_disabled" : ""}
  `;
  if (isLink) {
    return (
      <Link className={styles} to={linkNavigation}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={
        slideNext
          ? slideNextSlide
          : slidePrev
          ? slidePrevSlide
          : onClickFunction
      }
      className={styles}
    >
      {content}
    </button>
  );
};
