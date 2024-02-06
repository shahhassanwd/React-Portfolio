import "./Testimonials.css";
import AVAR1 from "../../imgs/avatar1.jpg";
import AVAR2 from "../../imgs/avatar2.jpg";
import AVAR3 from "../../imgs/avatar3.jpg";
import AVAR4 from "../../imgs/avatar4.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const data = [
  {
    avatar: AVAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint aut aliquid a excepturi non illum, perspiciatis animi necessitatibus ipsam earum quas facere vero? Repellat voluptas vitae nihil delectus perferendis.",
  },
  {
    avatar: AVAR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint aut aliquid a excepturi non illum, perspiciatis animi necessitatibus ipsam earum quas facere vero? Repellat voluptas vitae nihil delectus perferendis.",
  },
  {
    avatar: AVAR3,
    name: "Ibraham",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint aut aliquid a excepturi non illum, perspiciatis animi necessitatibus ipsam earum quas facere vero? Repellat voluptas vitae nihil delectus perferendis.",
  },
  {
    avatar: AVAR4,
    name: "Nana MCBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sint aut aliquid a excepturi non illum, perspiciatis animi necessitatibus ipsam earum quas facere vero? Repellat voluptas vitae nihil delectus perferendis.",
  },
];


const Testimonials = () => {
  
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container test-container"

      modules={[Autoplay,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="test">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
