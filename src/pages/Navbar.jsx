import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineCardTravel, MdOutlineClose} from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { SiSimplelogin } from "react-icons/si";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    const [open,setopen]=useState(false)
  const NavigateItem = (
    <>
      <li className="font-semibold ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-gray-100 no-underline font-bold"
              : " text-black no-underline font-bold"
          }
        >
          {" "}
          <FaHome className="lg:hidden md:hidden"></FaHome> Home
        </NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink
          to={"/alltourists"}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-gray-100 no-underline font-bold"
              : " text-black no-underline font-bold"
          }
        >
          {" "}
          <MdOutlineCardTravel className="lg:hidden md:hidden"></MdOutlineCardTravel>{" "}
          All Tourists Spot
        </NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink
          to={"/addtourists"}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-gray-100 no-underline font-bold"
              : " text-black no-underline font-bold"
          }
        >
          {" "}
          <MdAddPhotoAlternate className="lg:hidden md:hidden"></MdAddPhotoAlternate>{" "}
          Add Tourists Spot
        </NavLink>
      </li>
      <li className="font-semibold ">
        <NavLink
          to={"/mylist"}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 bg-gray-300 no-underline font-bold"
              : " text-black no-underline font-bold"
          }
        >
          {" "}
          <CiBoxList className="lg:hidden md:hidden"></CiBoxList> My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-4 fixed bg-white opacity-90  z-50 max-w-[1440px] mx-auto  top-0 shadow-sm">
      <div className="navbar-start">
      <div className="dropdown">
       
       <div className="md:hidden pr-2" onClick={()=>setopen(!open)}>
        
       {
        open === true?<MdOutlineClose className="text-2xl "></MdOutlineClose> : <LuMenu className="text-2xl"></LuMenu>
       }
        <ul
          className={`menu absolute duration-1000
          ${open?'-right-36':'right-14'}
          mt-3 z-[2] p-2 shadow bg-[#F2F6F7] h-lvh w-52`}
        >
        {
          NavigateItem
        }
        </ul>
       </div>
      </div>
        <Link to={"/"} className=" lg:text-4xl font-bold text-xl">
         <img src="/public/[FREE - HDconvert.com] Untitled design (4).png" alt="" />
        </Link>
      </div>
      <div className="navbar-center md:flex hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">{NavigateItem}</ul>
      </div>
      <div className="navbar-end pr-16">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 bg-transparent">
           <FaUserCircle size={25}></FaUserCircle>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
             <Link to={'/login'}><CiLogin></CiLogin> Login</Link>
            </li>
            <li>
             <Link to={'register'}><SiSimplelogin></SiSimplelogin> Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
