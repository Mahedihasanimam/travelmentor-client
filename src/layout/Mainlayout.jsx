import { Outlet } from "react-router-dom";

import Navbar from "../pages/Navbar";


const Mainlayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-popins px-2">
            <Navbar></Navbar>
      
            <div className="lg:mt-[120px] md:mt-[100px] mt-[70px] mb-12">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;