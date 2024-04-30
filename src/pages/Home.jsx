import { useLoaderData } from "react-router-dom";
import SwiperSlider from "../components/SwiperSlider";
import TouristCard from "../components/TouristCard";
import Gellary from "../components/Gellary";
import WhyChoosUs from "../components/WhyChoosUs";
import Countries from "../components/Countries";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";



const Home = () => {
    const tourist=useLoaderData();
    console.log(tourist)
  
    return (
        <div>
            <Helmet><title>Travelmentor|Home</title></Helmet>
           <SwiperSlider></SwiperSlider>
           <div>
           <h1 className="text-4xl text-center font-bold block mx-auto r my-20  border-b-4 pb-2  w-fit border-solid border-green-500">Tourists Spots</h1>
           <Player
                className=""
                autoplay
                loop
                src="https://lottie.host/3eb1cec0-029c-4994-8792-dd978050d107/vgQV7BLArS.json"
                style={{ height: "100px", width: "100px" }}
              ></Player>
           
            <div id="tourist" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                tourist.slice(0,6).map(item=><TouristCard item={item} key={item._id}></TouristCard>)
            }
            </div>
         <div>
         <h1 className="text-4xl text-center font-bold block mx-auto r my-20 mb-4 border-b-4 pb-2  w-fit border-solid border-green-500">Featured Collection</h1>
         <Gellary></Gellary>
         </div>
         <div>
        <Countries></Countries>
         <WhyChoosUs></WhyChoosUs>
         
         </div>
        </div>
        </div>
    );
};

export default Home;