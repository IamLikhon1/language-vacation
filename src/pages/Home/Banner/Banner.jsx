import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
       <div>
        
        
        <Carousel>
                <div>
                    <img src="https://img.freepik.com/free-psd/flat-design-language-learning-template_23-2149985505.jpg?w=996&t=st=1686240811~exp=1686241411~hmac=c840fb3f853b262ff41c2ead26284aca91e1e62480fd91e2b15eddc38d74827a" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/hand-drawn-language-learning-facebook-template_23-2150515118.jpg?w=996&t=st=1686240862~exp=1686241462~hmac=2ba033372cdb8d3a0233708c8021bf6b289e0e8babd9f9c4825820ef00384bf1" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/hand-drawn-language-learning-facebook-template_23-2150511164.jpg?w=996&t=st=1686240903~exp=1686241503~hmac=37cc4ba29495c6a7162cae84aadcbb878a848f23084c91cb4c78b0cfed4e8d7b" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-psd/hand-drawn-language-learning-facebook-template_23-2150511184.jpg?w=996" />
                    
                </div>
            </Carousel>
       </div>
            
      
    );
};

export default Banner;