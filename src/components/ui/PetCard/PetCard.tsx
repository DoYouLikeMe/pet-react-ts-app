import PetImage from "@/temp/pets-katrine.jpg";
import {Button} from "@/components/ui/Button/Button";
export const PetCard = () => {
  return (
    <div className="pet-card">
      <img src={PetImage} alt="" className="img-res" />
      <div className="pet-card__content">
        <h3 className="heading heading_medium">Katrine</h3>
        <Button isLink linkNavigation="/our-pets" content="Learn More" />
      </div>
    </div>
  );
};
