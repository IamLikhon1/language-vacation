import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="grid md:grid-cols-2 p-10">
            <img className="w-full" src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1686067414~exp=1686068014~hmac=3a9e8d4b7e0e3fff6846219c6ccc9063eed9d8a2294948fa9ca1282603ac5842" alt="" />
            <div className="w-full">
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold text-orange-500">Login</h1>
    </div>
    <div className="card  w-96 shadow-2xl ">
      <div className="card-body  w-96">
        <form onSubmit={'handleLogin'}>
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
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-warning">Login</button>

         
          
          <p className="mt-5 text-center font-semibold"><small>New to Fashion Summer <Link to='/register'><span className="text-orange-500 text-lg">Register</span></Link></small></p>
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


export default Login;