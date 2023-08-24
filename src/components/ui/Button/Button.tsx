interface ButtonProps {
  content?: string | number;
  isRound?: Boolean;
  isDisabled?: Boolean;
  isActive?: Boolean;
  isPrime?: Boolean;
}

export const Button = (props: ButtonProps) => {
  const {content, isRound, isDisabled, isActive, isPrime} = props;
  const allClasses = `${"button"}
  ${isPrime ? "button_prime" : ""}
  ${isRound ? "button_round" : ""}
  ${isActive ? "button_active" : ""}
  ${isDisabled ? "button_disabled" : ""}
  `;
  return <button className={allClasses}>{content}</button>;
};
