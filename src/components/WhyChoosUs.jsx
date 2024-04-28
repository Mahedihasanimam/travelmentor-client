import { MdOutlineSupportAgent } from "react-icons/md";
import { TbChartAreaLineFilled } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
const WhyChoosUs = () => {
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <h1 className="text-4xl text-center font-bold block mx-auto r my-20  border-b-4 pb-2  w-fit border-solid border-green-500">
          Why Travelmentor Is Best ?
        </h1>
        <div className="container mx-auto  grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div  className="flex  md:flex-row lg:flex-row bg-green-600 text-white shadow-lg gap-4 items-center p-4 border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < MdOutlineSupportAgent id="icon" className="text-white" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Best Support 24/7</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p className="opacity-70">
               Dedicated assistance around the clock ensures
                prompt help whenever needed, enhancing customer satisfaction
              </p>
            </div>
           </div>
          </div>
          <div className="flex shadow-lg  hover:shadow-2xl  gap-4 items-center p-2 border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < TbChartAreaLineFilled className="text-green-600" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Real-Time Updates</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p>
              With Travelmentor, travelers receive real-time updates on weather conditions, local events, and travel advisories
              </p>
            </div>
           </div>
          </div>
          <div className="flex   hover:shadow-2xl gap-4 items-center shadow-lg p-4 border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < FaHandHoldingHeart className="text-green-600" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Community Engagement</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p>
              Travelmentor fosters a vibrant community of travelers who share tips, recommendations, and experiences. 
              </p>
            </div>
           </div>
          </div>
          <div className="flex   hover:shadow-2xl gap-4 items-center p-4 shadow-lg border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < FaRegCalendarAlt className="text-green-600" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Instant Reservations</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p>
              Secure your spot in seconds with our seamless, hassle-free instant reservation service, available anytime
              </p>
            </div>
           </div>
          </div>
          <div className="flex  hover:shadow-2xl gap-4 items-center p-4 shadow-lg border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < FcProcess className="text-green-600" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Effortless Booking Process</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p>
              Instant reservations simplify the booking process, allowing users to quickly secure their desired accommodations,
              </p>
            </div>
           </div>
          </div>
          <div className="flex  hover:shadow-2xl gap-4 items-center p-2 border-2 border-solid border-gray-100 rounded-xl">
            <div>
                < FcCustomerSupport className="text-green-600" size={70}/>
            </div>
           <div>
           <div>
              <h3 className="my-1 text-xl font-bold">Customer Support</h3>
            </div>
            <div className="space-y-1 leading-tight">
              <p>
              Instant reservation services often provide dedicated customer support to assist users with any inquiries,
              </p>
            </div>
           </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default WhyChoosUs;
