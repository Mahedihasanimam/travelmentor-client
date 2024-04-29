import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const CountryCard = ({ countryitem }) => {
  const { name, description, image, _id } = countryitem;
  return (
    <div>
      {/* <Link className="no-underline" to={`/details/${_id}`}> */}
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <div className="card card-compact mb-14 mt-4 bg-base-100 border-2 border-solid border-gray-200 shadow-lg  hover:shadow-2xl">
            <img
              className="p-4 rounded-3xl "
              src={image}
              alt="Home"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div
              className="card-body"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="flex justify-between">
                <h2 className="card-title">{name}</h2>

              </div>
    
              <p className="no-underline font-semibold opacity-70 ">
                {description.slice(0, 200)}...
              </p>

              <div className="card-actions ">
                <Link
                //   to={`/details/${_id}`}
                  className="relative rounded-sm px-5 py-3 overflow-hidden font-bold no-underline  text-white bg-green-600 border border-gray-100  shadow-inner group"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-200 delay-200    group-hover:text-white ease">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default CountryCard;
