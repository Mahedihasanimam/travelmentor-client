import { useLoaderData } from "react-router-dom";
import TouristCard from "../components/TouristCard";
import { useState } from "react";
import { data } from "autoprefixer";


const AllTourists = () => {
  const tourist = useLoaderData();
  const [sortitem,setSortitem]=useState(tourist)
  console.log(sortitem)
//   console.log(sort.name)
  const handlesort=(e)=>{
    const targetedValue=e.target.value
    if(targetedValue=== 'average Cost'){
        fetch('http://localhost:5000/addtouristsSort')
        .then(res=>res.json())
        .then(data=>{
            setSortitem(data)
            console.log(data)
        })
    }

  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center  border-b-4 pb-1 w-fit border-solid border-green-500">
        Filter with you budget
      </h1>
      <select onChange={handlesort}
        name="country"
        id=""
        className="w-full  p-2 border-2 border-solid mb-8 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
      >
        <option value="">Sort average_cost</option>
        <option  value="average Cost">average Cost</option>
      </select>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {sortitem.map((item) => (
          <TouristCard item={item} key={item._id}></TouristCard>
        ))}
      </div>
    </div>
  );
};

export default AllTourists;
