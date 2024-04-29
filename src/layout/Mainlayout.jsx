import { Outlet } from "react-router-dom";

import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";


const Mainlayout = () => {
    return (
        <div className="">
           <div className="mb-32">
           <Navbar></Navbar>
           </div>
           <div className="max-w-[1440px] mx-auto font-popins px-2">
      
            <div>
            <Outlet></Outlet>
            </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;