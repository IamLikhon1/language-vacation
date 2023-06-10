import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUser = () => {
    const [allUser,setAllUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setAllUser(data))
    },[]);

    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    return (
        <div className="w-full">
            <h2 className="text-4xl text-center text-orange-500 font-medium uppercase my-10">Manage Users: {allUser.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Make Instructor</th>
      </tr>
    </thead>
    <tbody>
      {
        allUser.map((user,index)=> <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>

            <td>{user.role==='admin'?'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-info btn-sm">Admin</button> }
                
                </td>
            <td><button className="btn btn-success btn-sm">Instructor</button></td>
          </tr>)
      }
     
      
    </tbody>
  </table>
</div>
    
        </div>
    );
};

export default ManageUser;