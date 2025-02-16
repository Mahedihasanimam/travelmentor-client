// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

//importing typewriter-effect

// ..
AOS.init();
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
          delay: 2500,
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
          <div className="">
            <img
              className="w-full md:max-h-[600px]"
              src="https://images.pexels.com/photos/2169857/pexels-photo-2169857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="bg-black opacity-15 w-full h-full absolute top-0"></div>
            <div className="lg:top-[20%] md:top-[20%] top-[10%] md:w-1/2 md:left-12 left-4 absolute md:space-y-4 space-y-2 text-white">
              <h1
                className="font-bold md:text-6xl text-2xl "
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                welcome to <span className="text-yellow-300">travelmentor</span>
              </h1>
              <p className="font-semibold lg:text-lg text-sm ">
                Your expert guide in tourism management, offering insights,
                tips, and tools for seamless travel experiences
              </p>
              <a href="#tourist">
                <button
                  className="btn px-8 mt-4  bg-yellow-400 hover:bg-yellow-300 border-none rounded-sm  text-white font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Lern more
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              className="w-full md:max-h-[600px]"
              src="https://images.pexels.com/photos/2548535/pexels-photo-2548535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              
            />
            <div className="bg-black opacity-15 w-full h-full absolute top-0"></div>
            <div className="lg:top-[20%] md:top-[20%] top-[10%] md:w-1/2 md:left-12 left-4 absolute md:space-y-5 space-y-2 text-white">
              <h1
                className="font-bold md:text-6xl text-2xl"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                welcome to <span className="text-yellow-300">travelmentor</span>
              </h1>
              <p className="font-semibold lg:text-lg text-sm ">
                Your expert guide in tourism management, offering insights,
                tips, and tools for seamless travel experiences
              </p>
              <a href="#tourist">
                <button
                  className="btn px-8 mt-4  bg-yellow-400 hover:bg-yellow-300 border-none rounded-sm  text-white font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Lern more
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              className="w-full md:max-h-[600px]"
              src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="bg-black opacity-15 w-full h-full absolute top-0"></div>
            <div className="lg:top-[20%] md:top-[20%] top-[10%] md:w-1/2 md:left-12 left-4 absolute md:space-y-4 space-y-1 text-white">
              <h1 className="font-bold md:text-6xl text-2xl">
                <span className="text-yellow-300">Unlocking</span> Adventures
              </h1>
              <p className="font-semibold lg:text-lg text-sm">
                Empowering your journey with tailored advice, curated
                recommendations, and resources for enriching tourism management
              </p>
              <a href="#tourist">
                <button className="btn px-8 mt-4 bg-yellow-400 hover:bg-yellow-300 border-none rounded-sm  text-white font-bold">
                  Lern more
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
