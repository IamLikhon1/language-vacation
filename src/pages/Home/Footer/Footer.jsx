import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200  text-base-content">
  <div>
    <span className="footer-title">Contact Information</span> 
    <a className="link link-hover">Phone: 01614266700</a> 
    <a className="link link-hover">Email: likhonadnan55@gmail.com</a> 
    <a href="https://github.com/IamLikhon1" className="link link-hover">GitHub: https://github.com/IamLikhon1</a> 
    
  </div> 
  
  <div>
    <span className="footer-title">Address</span> 
    <a className="link link-hover">Narshindi,Bangladesh</a> 
    
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
  <Link to='/'> <img className="w-24 h-24 rounded-full " src="https://img.freepik.com/premium-vector/education-icon-university-college-academy_8071-16303.jpg?w=740" alt="" /></Link>
    <p>Foreign Language Learning School. <br/> Copyright register in 2023 &copy;</p>
  </div> 
 
</footer>
        </div>
    );
};

export default Footer;