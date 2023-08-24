export const Logo = ({isSecondary}: {isSecondary: boolean}) => {
  return (
    <div className={isSecondary ? "logo logo_secondary" : "logo"}>
      <div className="heading heading_medium logo__title">Cozy House</div>
      <div className="paragraph paragraph_small logo__subtitle">
        Shelter for pets in Boston
      </div>
    </div>
  );
};
