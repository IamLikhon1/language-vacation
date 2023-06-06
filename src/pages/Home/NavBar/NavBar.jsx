import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const {user,logOutUser}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOutUser()
 .then(()=>{})
 
  .catch(error=>{
    console.log(error)
  })
  }
    const navItems=
    
    <>
        <li className="font-serif  font-semibold text-lg"> <Link to='/'>Home</Link> </li>           
            <li className="font-serif  font-semibold text-lg"> <Link to='/instructors'>Instructors</Link> </li> 
            <li className="font-serif  font-semibold text-lg"> <Link to='/classes'>Classes</Link> </li>
            {
              user?<><li className="font-serif  font-semibold text-lg"> <Link to='/dashboard'>Dashboard</Link> </li>
              <p><img className="w-12 h-12 rounded-full mr-10" src={user?.photoURL} alt="" /></p> 
              </>:<></>
            }       
           { user?  <button onClick={handleLogOut} className="text-lg btn btn-primary hover:rounded-2xl"> <Link to='/login'>Log Out</Link> </button>:<button className=" text-lg btn btn-warning hover:rounded-2xl"> <Link to='/login'>Login</Link> </button> }      
    
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 items-center">
        {navItems}
      </ul>
    </div>
   <Link to='/'> <img className="w-16 h-16 rounded-full " src="https://img.freepik.com/free-vector/fashion-brand-logo-template_23-2148661990.jpg?w=740&t=st=1686064949~exp=1686065549~hmac=1fe7b23053d7fc015d6764fd81fa7cb9f4dcd8a6b4e576764c60a70c600eda1b" alt="" /></Link>
   <Link to='/'> <span className="btn btn-ghost normal-case text-xl font-serif items-center text-white">Fashion Summer</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  
</div>
            
        </div>
    );
};

export default NavBar;