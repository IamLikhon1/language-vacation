
const SingleCard = ({single}) => {
    return (
        <div className="card w-full bg-base-100 hover:bg-orange-600 rounded-2xl shadow-xl">
  <figure><img className="w-36 my-5 h-36 rounded-full" src={single.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> Name: {single.name}</h2>
    <p className="font-medium">Email: {single.email}</p>
    
  </div>
</div>
    );
};

export default SingleCard;