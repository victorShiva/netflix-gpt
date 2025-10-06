import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className='absolute w-screen h-screen '>
            <img className='absolute w-full h-full object-cover bg-black/90' src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg" alt="bg-img" />

            <Header />

            <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/80 flex flex-col p-10 items-center rounded-sm box-border min-h-[400px]'>
                <h1 className='font-bold text-4xl self-start mb-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder='Full Name' className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]' />}
                <input type="text" placeholder='Email Address' className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]' />


                <input type="text" placeholder='Password' className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]' />
                <button className='py-2 my-3 bg-red-600 w-80  font-bold rounded-[5px]'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='self-start pt-4 underline cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now " : "Already Registered ? Sign In Now "}</p>

            </form>
        </div>
    )
}

export default Login;