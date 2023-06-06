import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="grid md:grid-cols-2 p-10">
            <img src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?w=740&t=st=1684349654~exp=1684350254~hmac=2eff1ea9339d4713fb74e1056c3f9f288471f3e8fae4b9eb627b4e5f4f8e0da4" alt="" />
            <div className="w-full">
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold text-teal-500">Register</h1>
    </div>
    <div className="card  w-96 shadow-2xl ">
      <div className="card-body  w-96">
        <form onSubmit={'submitRegister'}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required /> 
          <span className="text-red-500">{'error'}</span>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-accent">Register</button>
          <p className="mt-5 text-center font-semibold"><small>Already Have Account! <Link to='/Login'><span className="text-emerald-500 text-lg">Login</span></Link></small></p>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};


export default Register;