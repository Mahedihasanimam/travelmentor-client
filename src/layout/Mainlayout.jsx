import { Outlet } from "react-router-dom";

import Navbar from "../pages/Navbar";


const Mainlayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-popins px-2">
           <div className="mb-32">
           <Navbar></Navbar>
           </div>
      
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;