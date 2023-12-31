import PetsImage from "@/images/main/about-pets.png";

import {Link} from "react-router-dom";

export const About = () => {
  return (
    <section className="page-section about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__image">
            <img className="img-res" src={PetsImage} alt="" />
          </div>
          <div className="about__content">
            <h2 className="heading heading_secondary">
              About the shelter “Cozy House”
            </h2>
            <p className="paragraph">
              Currently we have 121 dogs and 342 cats on our hands and
              statistics show that only 20% of them will find a family. The
              others will continue to live with us and will be waiting for a
              lucky chance to become dearly loved.
            </p>
            <p className="paragraph">
              We feed our wards with the best food and make sure that they do
              not get sick, feel comfortable (including psychologically) and
              well. We are supported by 87 volunteers and 28 employees of
              various skill levels. About 12% of the animals are taken by the
              shelter staff. Taking care of the animals, they become attached to
              the pets and would hardly ever leave them alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
