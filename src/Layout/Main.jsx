import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar/NavBar";
import Footer from "../pages/Home/Footer/Footer";
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default Main;