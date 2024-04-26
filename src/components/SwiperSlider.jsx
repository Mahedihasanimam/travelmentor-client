// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const SwiperSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeRight={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full max-h-[600px]" src=" https://r2.easyimg.io/ms5dhceow/111.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full max-h-[600px]"
            src="https://r2.easyimg.io/dk6qbq3b5/free-travel-agency-web-banner-design-template-1180x664.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full max-h-[600px]" src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        

        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
