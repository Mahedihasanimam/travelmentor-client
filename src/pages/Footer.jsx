import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdAddCall, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="px-4 mt-40  divide-y bg-[#181C2B] text-gray-100">
        <div className="max-w-[1440px] mx-auto pl-4">
          <div className="container  flex flex-col justify-between py-10  space-y-8 lg:flex-row lg:space-y-0" >
            <div className="lg:w-1/3 line-clamp-4 space-y-6" data-aos="fade-up"
       data-aos-duration="1000">
              <a
                rel="noopener noreferrer"
                className="flex justify-center space-x-3 lg:justify-start no-underline"
              >
                <span className="lg:text-4xl text-xl font-bold text-white">
                <img src="/public/[FREE - HDconvert.com] Untitled design (4).png" alt="" />
                </span>
              </a>
              <p className="opacity-70 ">
              Your companion for unforgettable journeys, offering guidance, inspiration, and tips to make your travel experiences extraordinary and seamless.
              </p>
              <div className="space-y-3">
                <div className="flex justify-start space-x-3 ">
                  <FaFacebook
                    className="hover:text-green-500 cursor-pointer"
                    size={20}
                  />
                  <FaTwitter
                    className="hover:text-green-500 cursor-pointer"
                    size={20}
                  />
                  <FaLinkedin
                    className="hover:text-green-500 cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3" data-aos="fade-up"
       data-aos-duration="1500">
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase text-gray-50">
                  Quick links
                </h3>
                <ul className=" list-none space-y-3">
                  <li className="text-green-500 flex items-center">
                    <FaArrowRight className="mr-1 font-bold" />{" "}
                    <Link className="text-white no-underline opacity-70" to={"/"}>
                      {" "}
                      Home
                    </Link>
                  </li>        
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1 font-bold" />{" "}
                    <Link className="text-white no-underline opacity-70" to={"/alltourists"}>
                      {" "}
                     Alltourists
                    </Link>
                  </li>        
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1 font-bold" />{" "}
                    <Link className="text-white no-underline opacity-70" to={"/addtourists"}>
                      {" "}
                     addtourists
                    </Link>
                  </li>        
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1 font-bold" />{" "}
                    <Link className="text-white no-underline opacity-70" to={"/mylist"}>
                      {" "}
                     mylists
                    </Link>
                  </li>        
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1" />{" "}
                    <Link
                      className="text-white no-underline opacity-70"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1" />{" "}
                    <Link
                      className="text-white no-underline opacity-70"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3" data-aos="fade-up"
       data-aos-duration="2000">
                <h3 className="tracking-wide uppercase text-gray-50">Services</h3>
                <ul className="space-y-4 list-none ">
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                      Blog
                    </Link>
                  </li>
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                     Travel
                    </Link>
                  </li>
                  <li className="hover:text-green-500 flex items-center">
                    <FaArrowRight className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                      Booking
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3" data-aos="fade-up"
       data-aos-duration="2500">
                <h3 className="uppercase text-gray-50">Contact Us</h3>
                <ul className="space-y-1 list-none">
                  <li className="hover:text-green-500 flex items-center">
                    <CiLocationOn className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                      mymensingh,dhaka,bangladesh
                    </Link>
                  </li>
                  <li className="hover:text-green-500">
                    <MdAddCall className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                      +1 (415) 555-1234
                    </Link>
                  </li>
                  <li className="hover:text-green-500">
                    <MdOutlineMail className="mr-1" />{" "}
                    <Link className="text-white no-underline opacity-70">
                      jdoe@example.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-6 text-sm text-center text-gray-400">
            © Travelmentor. All rights reserved.developer mahedi
          </div>
        </div>
      </footer>
    );
};

export default Footer;