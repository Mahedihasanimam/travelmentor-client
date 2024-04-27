import { useLoaderData } from "react-router-dom";
import SwiperSlider from "../components/SwiperSlider";
import TouristCard from "../components/TouristCard";
import Gellary from "../components/Gellary";




const Home = () => {
    const tourist=useLoaderData();
    console.log(tourist)
  
    return (
        <div>
           <SwiperSlider></SwiperSlider>
           <div>
           <h1 className="text-4xl font-bold text-center mt-16 mb-8 border-b-4 pb-2  w-fit border-solid border-green-500">Tourists Spots</h1>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                tourist.slice(0,6).map(item=><TouristCard item={item} key={item._id}></TouristCard>)
            }
            </div>
         <div>
         <h1 className="text-4xl font-bold text-center mt-20 mb-4 border-b-4 pb-2  w-fit border-solid border-green-500">Featured Collection</h1>
         <Gellary></Gellary>
         </div>
        </div>
        </div>
    );
};

export default Home;