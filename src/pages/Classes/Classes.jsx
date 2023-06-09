import { useLoaderData } from "react-router-dom";
import SingleClassCard from "./SingleClassCard";


const Classes = () => {
    const classesData=useLoaderData()
    // console.log(classesData)
    return (
        <div>
            <img className="w-full" src="https://img.freepik.com/free-vector/tiny-people-teacher-kids-camp-learning-english-spanish-chinese_335657-452.jpg?w=740&t=st=1686290010~exp=1686290610~hmac=9d6167cc50f0a516c6de1bf9cb57198162cd2a8e83603521621d89d090ddffee" alt="" />
            <h2 className="text-5xl uppercase text-center text-orange-500 my-10 font-serif font-medium">Show our all classes</h2>

            <div className="grid md:grid-cols-3 my-16 gap-10 mx-10">
            {
                classesData.map(item=><SingleClassCard key={item.id} item={item} ></SingleClassCard>)
            }


            </div>
            
        </div>
    );
};

export default Classes;