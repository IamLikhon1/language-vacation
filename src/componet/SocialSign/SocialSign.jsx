import { useContext } from 'react';
import gogoleImg from '../../assets/google-signin.png'
import { AuthContext } from '../../providers/AuthProvider';
import  {  toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialSign = () => {
    const{googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/'

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser=result.user
            console.log(loggedInUser)
            const saveUser={name:loggedInUser.displayName, email:loggedInUser.email}
            fetch('https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success('Successfully SignIn With Google')
            navigate(from,{replace:true})
        })
           
        })
        .catch(error=>console.log(error))

   
    }
    return (
        <div>
             <div className="divider"></div>
           <div className="w-full  my-4">
          <img onClick={handleGoogleSignIn} className='w-72 cursor-pointer mx-auto' src={gogoleImg} alt="" />
           </div>
            
        </div>
    );
};

export default SocialSign;