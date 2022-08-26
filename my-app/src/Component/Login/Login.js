import {React,useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);




    const HeandelEmailBlur = event => {
        setEmail(event.target.value)
    }
    const HeandelPssawordBlur = event => {
        setPassword(event.target.value)
    }


    const HandelSignin = event => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/order')
    }
    


    return (
        <div className='login'>
            <div className='form-container'>


                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={HandelSignin}>
                        <label htmlFor='email'>Email: </label>
                        <div className='input-group'>

                            <input onBlur={HeandelEmailBlur} type='email' name='email' required />

                        </div>
                        <label htmlFor='password'>Password: </label>
                        <div className='input-group'>

                            <input onBlur={HeandelPssawordBlur} type='password' name='psaaword' required />

                        </div>
                        <div className=''>
                            <input className='form-submit' type='submit' value='Login' />
                        </div>
                    </form>
                    <p style={{ color: 'blue' }}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading</p>
                    }
                    <p>
                        You haven't ant account <Link to='/signup' className='form-link'>Creat A New Account</Link>
                    </p>
                </div>



            </div>

        </div>
    );
};

export default Login;