import StartImage from "@/images/header/start-screen-puppy.png";
import {Button} from "@/components/ui/Button/Button";

export const NotOnly = () => {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__content">
          <h1 className="heading intro__heading">
            Not only People need a house
          </h1>
          <p className="paragraph">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <Button isPrime={true} content={"Make a friend"} />
        </div>
        <div className="intro__image">
          <img className="img-res" src={StartImage} alt="Start Screen Puppy" />
        </div>
      </div>
    </section>
  );
};
