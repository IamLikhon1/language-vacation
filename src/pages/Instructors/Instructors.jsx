import { useLoaderData } from "react-router-dom";

const Instructors = () => {
    const dataLoader=useLoaderData()
    console.log(dataLoader)
    return (
        <div>
            
        </div>
    );
};

export default Instructors;