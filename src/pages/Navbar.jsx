import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineCardTravel, MdOutlineClose } from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { SiSimplelogin } from "react-icons/si";
import { useContext, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AuthContext } from "../Authprovidfer/AuthProvider";
import { CiLogout } from "react-icons/ci";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setopen] = useState(false);
  const handleLogout = () => {
    logout();
  };
  const NavigateItem = (
    <>
      <li className="font-semibold ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-green-400 bg-gray-100 no-underline font-bold"
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
              ? "text-green-400 bg-gray-100 no-underline font-bold"
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
              ? "text-green-400 bg-gray-100 no-underline font-bold"
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
              ? "text-green-400 bg-gray-300 no-underline font-bold"
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
          <div className="md:hidden pr-2" onClick={() => setopen(!open)}>
            {open === true ? (
              <MdOutlineClose className="text-2xl "></MdOutlineClose>
            ) : (
              <LuMenu className="text-2xl"></LuMenu>
            )}
            <ul
              className={`menu absolute duration-1000
          ${open ? "-right-36" : "right-14"}
          mt-3 z-[2] p-2 shadow bg-[#F2F6F7] h-lvh w-52`}
            >
              {NavigateItem}
              <div>
              {user && (
                <div>
                  <div className="avatar">
                    <div className="w-16 mt-8 ml-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} />
                      
                    </div>
                  </div>
                    <p className="ml-6 font-bold">{user?.displayName}</p>
                </div>
              )}
            </div>
            </ul>
            
          </div>
        </div>
        <Link to={"/"} className=" lg:text-4xl font-bold text-xl">
          <img
            src="/public/[FREE - HDconvert.com] Untitled design (4).png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center md:flex hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">{NavigateItem}</ul>
      </div>
      <div className="navbar-end ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={user ? "m-1 bg-white" : "btn m-1 bg-white"}
          >
            <div className="w-12 rounded-full">
              {user ? (
                <div>
                  <img
                    className="rounded-full"
                    id="userbtn"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <FaUserCircle size={25}></FaUserCircle>
              )}
              <ReactTooltip
                anchorId="userbtn"
                place="top"
                content={user?.displayName || "no name found"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <li>
                <button onClick={handleLogout} className="text-green-500 font-bold">
                  <CiLogout></CiLogout> Logout
                </button>
              </li>
            ) : (
              <div>
                <li>
                  <Link to={"/login"} className="text-green-500 font-bold">
                    <CiLogin></CiLogin> Login
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} className="text-green-500 font-bold">
                    <SiSimplelogin></SiSimplelogin> Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
