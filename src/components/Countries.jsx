
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
    const [country,setCountry]=useState([])
    console.log(country)

    useEffect(()=>{
        fetch('https://travelmentor-server.vercel.app/countrys')
        .then(res=>res.json())
        .then(data=>{
            setCountry(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-4xl text-center font-bold block mx-auto r my-20 mb-4 border-b-4 pb-2  w-fit border-solid border-green-500">Featured Countries</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 px-4">
            {
                country.map(countryitem=><CountryCard countryitem={countryitem} key={countryitem._id}></CountryCard>)
            }
            </div>
            
        </div>
    );
};

export default Countries;