// import { FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SingleInfo from "../SingleInfo";
import { useState } from "react";

const StudentClass = () => {
    const items=useLoaderData()
    const [cardDelete,setCardDelete]=useState([])


  const handleDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/delete/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            Swal.fire(
          'Deleted!',
          'Your class has been deleted.',
          'success'
         )
         const remaining=cardDelete.filter(item=>item._id!==id)
         console.log(remaining)
         setCardDelete(remaining)
        
          }
        })
      }
    })

  }

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
        items.map((data,index)=><SingleInfo index={index} key={data._id} data={data} handleDelete={handleDelete} setCardDelete={setCardDelete} cardDelete={cardDelete}
        
        ></SingleInfo>)
      }
      
    </tbody>
  </table>
</div>



        </div>
    );
};

export default StudentClass;
