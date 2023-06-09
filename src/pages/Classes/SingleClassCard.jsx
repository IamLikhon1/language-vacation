
const SingleClassCard = ({item}) => {
    const{available,instructor,name,image,price}=item
    console.log(available)
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleClassCard;