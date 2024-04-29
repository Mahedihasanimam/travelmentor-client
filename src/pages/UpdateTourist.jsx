import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovidfer/AuthProvider";
import Swal from "sweetalert2";

const UpdateTourist = () => {
  const user = useContext(AuthContext);
  const tourist = useLoaderData();
  const navigate=useNavigate()
  const {
    name,
    location,
    photo,
    details,
    country,
    travelTime,
    cost,
    seasonality,
    totaVisitorsPerYear,
    _id,
  } = tourist;

  const handleUpdateTourist = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const country = form.country.value;
    const cost = form.cost.value;
    const travelTime = form.travelTime.value;
    const seasonality = form.seasonality.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const email = user.user.email;
    const userName = user.user.displayName;
    const updateTouristInfo = {
      name,
      location,
      photo,
      details,
      email,
      userName,
      country,
      travelTime,
      cost,
      seasonality,
      totaVisitorsPerYear,
    };
    console.log(updateTouristInfo);
    fetch(`http://localhost:5000/addtourists/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateTouristInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Tourists Spot updated succesfully!!",
            icon: "success",
          });
        navigate('/mylist')
        }
        console.log(data);
      });
  };
  return (
    <div>
      <section className="p-6 bg-gray-100  bg-cover text-black text-opacity-50 dark:text-gray-900 text-start">
        <form
          onSubmit={handleUpdateTourist}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="  text-4xl font-bold mb-12 text-[#305992] text-center">
                Update Tourists Spot
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm font-bold">
                  Tourist Sport Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={name}
                  required
                  className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country" className="text-sm font-bold">
                  country_Name
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  defaultValue={country}
                  required
                  className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="cost" className="text-sm font-bold">
                  average_cost
                </label>
                <input
                  id="cost"
                  type="text"
                  name="cost"
                  defaultValue={cost}
                  required
                  className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="seasonality" className="text-sm font-bold">
                  seasonality
                </label>
                <input
                  id="seasonality"
                  type="text"
                  name="seasonality"
                  defaultValue={seasonality}
                  required
                  className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="travel_time" className="text-sm font-bold">
                  travel_time
                </label>
                <input
                  id="travel_time"
                  type="text"
                  name="travelTime"
                  defaultValue={travelTime}
                  required
                  className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="location" className="text-sm font-bold">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  defaultValue={location}
                  required
                  className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photo" className="text-sm font-bold">
                  photo
                </label>
                <input
                  id="Photo"
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  required
                  className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="totaVisitorsPerYear"
                  className="text-sm font-bold"
                >
                  totaVisitorsPerYear
                </label>
                <input
                  id="totaVisitorsPerYear"
                  type="text"
                  name="totaVisitorsPerYear"
                  defaultValue={totaVisitorsPerYear}
                  required
                  className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="city" className="text-sm font-bold">
                  description
                </label>
                <textarea
                  id="Details"
                  type="text"
                  name="details"
                  defaultValue={details}
                  required
                  className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <input
          
            type="submit"
            value={"Update Tourist "}
            className="btn w-full text-xl bg-[#305992] hover:bg-[#305992] border-none text-white font-bold"
          />
        </form>
      </section>
    </div>
  );
};

export default UpdateTourist;
