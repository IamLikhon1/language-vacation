import { FaHome, FaUserAlt,FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="mx-10">
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mt-16 ml-8">
    {/* Page content here */}

        <Outlet></Outlet>

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#A5A3c1]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-white font-medium font-serif ">
      {/* Sidebar content here */}


      <li><NavLink to='/dashboard/studentclass'><FaUserAlt></FaUserAlt> Your Selected Classes </NavLink></li>
      <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment</NavLink></li>
      <div className="divider"></div>
      <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>

    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashBoard;