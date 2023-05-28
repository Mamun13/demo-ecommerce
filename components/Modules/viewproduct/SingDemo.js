import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
// import ImageOne from '../../../public/products/product3.png';
import ImageOne from '../../../public/products/product3.png';
import ImageTwo from '../../../public/products/product1.png';
import ImageThree from '../../../public/products/product4.png';

const SingDemo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={ImageOne}  className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} className="single-object"/>  
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} className="single-object"/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={ImageOne} className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} className="single-object-demo"/>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
export default SingDemo