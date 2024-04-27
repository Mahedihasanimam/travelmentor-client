import { useLoaderData } from "react-router-dom";
import TouristCard from "../components/TouristCard";


const AllTourists = () => {
        const tourist=useLoaderData();
        console.log(tourist)
      
   
    return (
        <div>
            <h1 className="text-4xl font-bold text-center  border-b-4 pb-1 mb-5 w-fit border-solid border-green-500">All tourists</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                tourist.map(item=><TouristCard item={item} key={item._id}></TouristCard>)
            }
            </div>
        </div>
    );
};

export default AllTourists;