import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
            } else {
                dispatch(removeUser);
            }
        });
    }, [])

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;