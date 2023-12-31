import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const Instructors = () => {
    const dataLoader=useLoaderData()
    return (
        <div data-aos="zoom-in-up"data-aos-duration="1500">
            <img className="w-full" src="https://img.freepik.com/premium-vector/businessman-explaining-scheme_23-2147504165.jpg?w=740" alt="" />
            <div>
                <h2 className="text-5xl text-orange-400 my-10 text-center font-serif uppercase ">Our Best Instructors</h2>
                <div className="grid md:grid-cols-3 gap-5 mx-10 my-20"data-aos="zoom-in-up"data-aos-duration="3000">
                    {
                        dataLoader.map(single=><SingleCard key={single.id}
                            single={single}
                        ></SingleCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Instructors;