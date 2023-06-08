import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
       <div>
        
        
        <Carousel>
                <div>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-summer-camping-social-media-cover-template_23-2149480551.jpg?w=996&t=st=1686237041~exp=1686237641~hmac=73abb46243fa8bd682533023378304a2bf19b5a57b0bcf8f4e85707decff84f2" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-twitch-banner-template_23-2149634010.jpg?w=996&t=st=1686237110~exp=1686237710~hmac=aedaefabc594aa218cac48a1bca6cb9f38e7fe7bc62cb1e6b032f5e053d97f17" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/summer-camp-kids-wear-scout-honor-uniform-banner-template-background-education-advertising_83111-2812.jpg?w=996" />
                    
                </div>
            </Carousel>
       </div>
            
      
    );
};

export default Banner;