import {Navigation, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {PetCard} from "@/components/ui/PetCard/PetCard";
import {Button} from "@/components/ui/Button/Button";

export const OurFriends = () => {
  const state = [
    "Slider 11111",
    "Slider 2222",
    "Slider 333",
    "Slider 444",
    "Slider 555",
    "Slider 666",
    "Slider 777",
  ];
  return (
    <section className="page-section page-section_grey">
      <div className="container">
        <div className="our-friends">
          <h2 className="heading heading_secondary">
            Our friends who are looking for a house
          </h2>
          <div className="our-friends__swiper">
            <Swiper
              slidesPerView={1}
              loop
              modules={[Navigation, Autoplay]}
              breakpoints={{
                1200: {
                  spaceBetween: 90,
                  slidesPerView: 3,
                },

                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {state.map((data) => {
                return <SwiperSlide>{<PetCard />}</SwiperSlide>;
              })}
              <div className="swiperButtons">
                <Button
                  slidePrev
                  isRound
                  content={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="6"
                      viewBox="0 0 14 6"
                      fill="none"
                    >
                      <path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="currentColor" />
                    </svg>
                  }
                />
                <Button
                  slideNext
                  isRound
                  content={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="6"
                      viewBox="0 0 14 6"
                      fill="none"
                    >
                      <path
                        d="M0 4V2L11 2V0L14 3L11 6V4L0 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
              </div>
            </Swiper>
          </div>

          <Button
            isLink
            isPrime
            linkNavigation={"/our-pets"}
            content={"Get to know the rest"}
          />
        </div>
      </div>
    </section>
  );
};
