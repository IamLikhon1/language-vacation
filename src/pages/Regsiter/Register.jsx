import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import  {  toast } from 'react-hot-toast';
import SocialSign from "../../componet/SocialSign/SocialSign";


const Register = () => {
  const {createUser,updateUserProfile}=useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()

  const onSubmit = data => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      const user=result.user
      console.log(user)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{

        const saveInfo={name:data.name,email:data.email}   
        fetch('https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/users',{
          method:'POST',
          headers:{
            'content-type':'application/json',
          
          },
          body:JSON.stringify(saveInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            toast.success('successfully Register')
            navigate('/')
          }
        })

         
      })
      .catch(error=>console.log(error))
    })
    .catch(error=>console.log(error))
  };

    return (
        <div className="grid md:grid-cols-2 p-10">
            <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=740&t=st=1686286416~exp=1686287016~hmac=6f1fa70fedcb2c70ca7e12514c65fe92cbaffcc76616c1b7a4492651c993c580" alt="" />
            <div className="w-full">
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold text-teal-500">Register</h1>
    </div>
    <div className="card  w-96 shadow-2xl ">
      <div className="card-body  w-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name")} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email")} name="email" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"{...register("password",{ required: true,minLength:6,maxLength:20,
          pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}name="password" className="input input-bordered" required /> 
           {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password is must 6 Characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">You have to insert 1 capital letter and 1 special character</p>}
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="password" {...register("confirm")} name="confirm" className="input input-bordered" required /> 
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL"{...register("photoURL")} name="photoURL" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-secondary" type="submit" value="Sign Up" />
          <p className="mt-5 text-center font-semibold"><small>Already Have Account! <Link to='/Login'><span className="text-emerald-500 text-lg">Login</span></Link></small></p>
        </div>
        </form>
        <SocialSign></SocialSign>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};


export default Register;