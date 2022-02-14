import React from 'react';
import './Login.css'
import { useLocation,useHistory} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../hooks/useAuth';

const Login = () => {
    const{signInWithGoogle} = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () =>{
      signInWithGoogle()
      .then (result =>{
        history.push(redirect_url);
        

    })
    
    }
    return (
        <div>
            <div  className='login'>
            <button onClick={handleGoogleLogin} className='ms-4 mx-auto mt-5 p-4 rounded '> SignIn with Google </button>
            </div>
            
        </div>
    );
};

export default Login;