import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    //console.log(user);

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate('/')
            }).catch((error) => {
                navigate('/error');
                console.log(error);
            });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            //console.log(user);
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate('/browse');
            } else {
                dispatch(removeUser);
                navigate('/')
            }
        });
        return () => { unsubscribe() };
    }, [])

    return (
        <div
            className="absolute z-40 w-full px-6 py-2 bg-gradient-to-b from-black flex justify-between items-center">
            <img
                className="w-52 h-24"
                src={LOGO} alt="netflix-logo" />
            {
                user &&
                <div
                    className="flex items-center gap-2"
                >
                    <h1 className="text-cyan-400 capitalize mr-1 font-bold">{user.displayName}</h1>
                    <img
                        className="w-8 h-8 rounded-md"
                        //src={user.photoURL}
                        src={USER_LOGO}
                        alt="userLogo" />
                    <button
                        className="bg-red-500 py-1 px-2 rounded-sm hover:bg-red-600 box-border shadow-lg hover:shadow-red-600/50 shadow-green-600/50 font-bold text-sm"
                        onClick={handleSignOut}> (Sign Out)
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;