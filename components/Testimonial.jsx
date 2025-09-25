"use client";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper rquired modules
import { Autoplay } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
  {
    message: "I believe that continuous learning and hands-on practice are the keys to becoming a better developer every day.",
    name: "Paraphol Puangpee",
  },
  {
    message: "I enjoy transforming ideas into real projects through clean and responsive code.",
    name: "Paraphol Puangpee",
  },
  {
    message: "Collaboration and curiosity drive me to keep improving both as a developer and as a teammate.",
    name: "Paraphol Puangpee",
  },
];

const Testimoial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent">{person.name}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimoial;
