
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <h2 className="text-5xl uppercase font-semibold text-orange-500">JOIN OUR NEWSLETTER</h2>
                    <h4 className="text-2xl my-10">Subscribe to our newsletter to receive the latest news & updates.</h4>
                    <div>
                    
                    <input  type="text" placeholder="Email" className="input input-bordered w-full max-w-xs text-black p-5  " /> 
                    <button className="btn btn-success ml-5 w-32 hover:btn-info">Send</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default NewsLetter;