import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { Navigation } from 'swiper'


// import 'swiper/less';
// import 'swiper/less/bundle'
// import 'swiper/less/grid'
// import 'swiper/less/autoplay';
// import 'swiper/less/effect-fade';
// import 'swiper/less/a11y';
// import 'swiper/less/keyboard';
// import 'swiper/less/navigation';
// import 'swiper/less/pagination';

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import s from '../../css/SwiperCards.module.css'

const SwiperCards = ({ children }) => {

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const wapper = useRef(null)

  return (
    <div className={s.swiperBox}>
      <Swiper
        a11y={true}
        spaceBetween={16}
        slidesPerView={1.1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        modules={[A11y, Navigation]}
        className={s.swiper}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current
        }}
      >
        {children}

        <div className={s.swiperNavPrev} ref={swiperNavPrevRef}></div>
        <div className={s.swiperNavNext} ref={swiperNavNextRef}></div>
      </Swiper>
    </div >
  );
};

export default SwiperCards