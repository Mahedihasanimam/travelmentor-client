import { useLoaderData } from "react-router-dom";

import SingleCountry from "../components/SingleCountry";


const CountryDetails = () => {
    const countrydec=useLoaderData()
    console.log(countrydec)
    return (
        <div>
           <h1 className=" text-4xl font-bold my-8 text-green-600">All data from this country</h1>
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
           {
                countrydec.map(countryitem=><SingleCountry countryitem={countryitem} key={countryitem._id}></SingleCountry>)
            }
           </div>
        </div>
    );
};

export default CountryDetails;