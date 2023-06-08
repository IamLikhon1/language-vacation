import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const Instructors = () => {
    const dataLoader=useLoaderData()
    return (
        <div>
            <img className="w-full" src="https://img.freepik.com/premium-vector/businessman-explaining-scheme_23-2147504165.jpg?w=740" alt="" />
            <div>
                <h2 className="text-4xl text-orange-400 my-10 text-center font-serif ">Our Best Instructors</h2>
                <div className="grid md:grid-cols-3 gap-5 mx-10 my-20">
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