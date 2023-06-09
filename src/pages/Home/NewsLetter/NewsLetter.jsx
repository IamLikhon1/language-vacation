
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src="https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?w=740&t=st=1686283960~exp=1686284560~hmac=e36aadd6a218edc021363e83b0f89d18c72554fd66a8228a15d71265ea3090ee" alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 22, 2023</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero tenetur accusantium nesciunt totam porro aspernatur, numquam temporibus natus quo doloribus ipsum, veritatis ex vitae! Expedita odio illo, perspiciatis minus eum eveniet? A distinctio culpa quasi expedita. Vel, cum? Recusandae eligendi iure libero distinctio similique cumque ab quae ducimus ipsam!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;