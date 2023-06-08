import { useContext } from 'react';
import gogoleImg from '../../assets/google-signin.png'
import { AuthContext } from '../../providers/AuthProvider';
import  {  toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialSign = () => {
    const{googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.loggedUser;
            console.log(loggedUser)
            toast.success('Successfully Google Sign In')
            navigate('/')
            
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