import { FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const StudentClass = () => {
    const classData=useLoaderData()
    console.log(classData)
    return (
        <div>
           <h2 className="text-4xl text-center text-orange-500 uppercase font-serif my-10 font-medium">The classes you added <Link to='/dashboard/payment'><button className="btn btn-accent btn-sm">Pay</button></Link> </h2>


           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seat</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        classData.map((data,index)=><tr key={data._id}>
            <th>{index+1}</th>
            <td>{data.name}</td>
            <td>{data.instructor}</td>
            <td>{data.available}</td>
            <td>${data.price}</td>
            <td><button className="btn btn-outline btn-secondary btn-sm"><FaTrashAlt></FaTrashAlt> </button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>



        </div>
    );
};

export default StudentClass;