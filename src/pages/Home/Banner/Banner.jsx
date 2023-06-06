import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
       <div>
        
        <Carousel>
                <div>
                    <img src="https://img.freepik.com/free-vector/flat-geometric-travel-youtube-thumbnail_23-2148927020.jpg?w=826&t=st=1686081468~exp=1686082068~hmac=891287fdc0bd6d644d49d7a156ad2f9afa74b7b8b8552a4db871a7e2bc640816" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/adventure-outdoors-children-banner-template_23-2148829425.jpg?w=826&t=st=1686081555~exp=1686082155~hmac=9c5903bd32b16b5837fdc9c3a0158627be7a62bed1dd4a59b3eaab2ca40a7326" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/wild-nature-banner-template_23-2148879639.jpg?w=740&t=st=1686081608~exp=1686082208~hmac=64086dc5fba4276fbca725df082fac5f6739367a8e167cc39ad6ec6d69fcbcec" />
                    
                </div>
            </Carousel>
       </div>
            
      
    );
};

export default Banner;