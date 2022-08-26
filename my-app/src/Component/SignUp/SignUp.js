import  {React, useState } from 'react'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Login/Login.css'
import { Link ,useNavigate} from 'react-router-dom';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const navigate =useNavigate()


    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)


    if(user){
        navigate('/home')
    }



    const HeandelEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const HeandelPssawordBlur = event =>{
        setPassword(event.target.value)
    }
    const HeandelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }


    const HandelCreatUser =event =>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError("Didn't Match Password")
            return
        }
        if(password.length < 8){
            setError('Must be 8 Charcter')
        }
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div>
            <div className='form-container'>


                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={HandelCreatUser}>
                        <div>
                        <label htmlFor='email'>Email: </label>
                        <div className='input-group'>

                            <input onBlur={HeandelEmailBlur} type='email' name='email' id='' required />

                        </div>
                        </div>
                        <div>
                        <label htmlFor='password'>Password: </label>
                        <div className='input-group'>

                            <input onBlur={HeandelPssawordBlur } type='password' name='psaaword' id='' required />

                        </div>
                        </div>
                        <div>
                        <label htmlFor='confirm-password'>Confirm Password: </label>
                        <div className='input-group'>

                            <input onBlur={HeandelConfirmPasswordBlur} type='password' name='psaaword' id='' required />

                        </div>
                        </div>
                        <div>
                            <input className='form-submit' type='submit' value='Sign Up' id='' />
                        </div>
                    </form>
                    <div>
                        <p>{error}</p>
                    </div>
                    <p>
                        Already have a account <Link to='/login' className='form-link'>Login</Link>
                    </p>
                </div>

            </div>
        </div>
    );
    }

export default SignUp;