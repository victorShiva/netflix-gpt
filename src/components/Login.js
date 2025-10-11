import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

console.log(auth);

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    console.log("render");
    useEffect(() => { console.log("useEffect"); }, [])
    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/141312814?v=4"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }))
                        console.log(user);
                    }).catch((error) => {
                        setErrorMessage(error);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        } else {
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    //Signed In
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + "-" + errorMessage);
                })
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div className='absolute w-screen h-screen '>
            <img
                className='absolute w-full h-full object-cover bg-black/90'
                src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg"
                alt="bg-img" />

            <Header />

            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/80 flex flex-col p-10 items-center rounded-sm box-border min-h-[400px]'
            >
                <h1
                    className='font-bold text-4xl self-start mb-3'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {
                    !isSignInForm && <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]'
                    />
                }

                <input
                    ref={email}
                    type="email"
                    placeholder='Email Address'
                    className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]'
                />


                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className='p-3 my-3 w-80 bg-gray-800/60 text-lg rounded-[5px]'
                />

                <p
                    className='text-red-600 self-start'>
                    {errorMessage}
                </p>

                <button
                    className='py-2 my-3 bg-red-600 w-80  font-bold rounded-[5px]'
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className='self-start pt-4 underline cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix ? Sign Up Now " : "Already Registered ? Sign In Now "}
                </p>

            </form>
        </div>
    )
}

export default Login;