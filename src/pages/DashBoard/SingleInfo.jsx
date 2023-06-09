import { FaTrashAlt } from "react-icons/fa";

const SingleInfo = ({data,index,handleDelete}) => {
    const{_id}=data
    
    return (
        <tr>
            <th>{index+1}</th>
            <td>{data.name}</td>
            <td>{data.instructor}</td>
            <td>{data.available}</td>
            <td>${data.price}</td>
            <td><button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-secondary btn-sm"><FaTrashAlt></FaTrashAlt> </button></td>
          </tr> 
    );
};

export default SingleInfo;