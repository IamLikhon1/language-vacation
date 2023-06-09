import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SingleClassCard = ({item}) => {
    const{available,instructor,name,image,price}=item
    const{user}=useContext(AuthContext)
    const navigate=useNavigate()
   


    const handleSelect=()=>{

      if(user){
        console.log('Valo aso')
      }
      else{
        toast.success('You Have To Login First')
        navigate('/login')
      }
    }

  

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className="h-72" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name} </h2>
    <h2 className="card-title">Instructor: {instructor} </h2>
    <h2 className="card-title">Available seats: <span className="text-orange-500">{available}</span> </h2>
    <h2 className="card-title">Price: ${price} </h2>

    
    <div className="card-actions justify-end my-5 cursor-pointer">
      <button onClick={handleSelect} className="btn btn-outline btn-warning border-0 border-b-4 text-orange-600">Select</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleClassCard;