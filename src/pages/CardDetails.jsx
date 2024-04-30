import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const tourist = useLoaderData();
  console.log(tourist)
const {name, location, photo, details,email,userName,country,travelTime,cost,seasonality,totaVisitorsPerYear}=tourist;
  return (
    <div>
      <Helmet><title>CardDetails</title></Helmet>
      <div className="card lg:w-4/5 w-full lg:p-8 p-2 rounded-md mx-auto bg-base-100 shadow-sm">
        <strong className="text-4xl font-bold my-8"># {name}</strong>
        
        <figure>
          <img className="w-full"
            src={photo}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          
          <strong className="text-green-600 lg:text-4xl text-xl font-bold">TotalCost : {cost} BDT</strong>
          <strong>visitor/year : {totaVisitorsPerYear}</strong>
          <hr />
          <strong  className="flex items-center gap-1"> <CiLocationOn className="text-green-600" size={20}></CiLocationOn> {location}</strong>
          <strong>Country : {country}</strong>
          <strong>travelTime : {travelTime}</strong>
          <strong>seasonality : {seasonality}</strong>
         <hr />
            <h1 className="lg:text-4xl text-xl font-bold text-green-600">who added this ?</h1>
            <p>Email : {email}</p>
          <p>Name : {userName}</p>
         <hr />
          <p> <strong>Details :</strong> {details}</p>
          <div className="card-actions ">
            <Link to={'/'}><button className="btn bg-green-600 hover:bg-green-600 rounded-sm text-white font-bold my-4">Back to home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
